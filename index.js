function getAllModules() {
    const branches = [
        require('basic'),
        require('advanced')
    ]
    const modules = {}
    branches.forEach(modules => {
        Object.keys(modules).forEach(moduleName => {
            modules[moduleName] = modules[moduleName]
        })
    })
    return modules
}

module.exports = getAllModules()