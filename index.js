const globalRegexAliases = {
    '\\$GG': '\\[GrieferGames\\]'
}

function transformPattern(regex) {
    let regexString = regex.toString()
    regexString = regexString.substring(1, regexString.length - 1)
    Object.keys(globalRegexAliases).forEach(alias => {
        regexString = regexString.replace(new RegExp(alias, 'g'), globalRegexAliases[alias])
    })
    return new RegExp(regexString)
}

function getAllData() {
    const branches = [
        require('./basic'),
        require('./advanced')
    ]
    const returnData = {}
    branches.forEach(modules => {
        Object.keys(modules).forEach(moduleName => {
            returnData[moduleName] = modules[moduleName]

            // pattern alias logic
            const chatPatterns = returnData[moduleName].chatPatterns
            if (chatPatterns) {
                Object.keys(chatPatterns).forEach(patternKey => {
                    const chatPattern = chatPatterns[patternKey]
                    if (chatPattern instanceof Array) {
                        chatPattern.map(transformPattern)
                    } else {
                        chatPatterns[patternKey] = transformPattern(chatPattern)
                    }
                })
            }
        })
    })
    return returnData
}

module.exports = getAllData()
// TODO: spamWarnings, Aliases, Tests, Transformers
