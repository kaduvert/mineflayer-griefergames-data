function getAllData() {
    const branches = [
        require('./basic'),
        require('./advanced')
    ]
    const returnData = {}
    branches.forEach(modules => {
        Object.keys(modules).forEach(moduleName => {
            returnData[moduleName] = modules[moduleName]
        })
    })
    return returnData
}

module.exports = getAllData()