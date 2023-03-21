function getAllData() {
    const branches = [
        require('./basic'),
        require('./advanced')
    ]
    const returnData = {
        patternHeadNameSeparator: '->' // example event name: chat:itemClear->nextIn
    }
    branches.forEach(modules => {
        Object.keys(modules).forEach(moduleName => {
            returnData[moduleName] = modules[moduleName]
        })
    })
    return returnData
}

module.exports = getAllData()
