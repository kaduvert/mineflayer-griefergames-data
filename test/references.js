const assert = require('assert')

const branches = [
    'basic',
    'advanced'
]

branches.forEach(branchName => {
    const modules = require('../' + branchName)
    Object.keys(modules).forEach(moduleName => {
        const module = modules[moduleName]
        describe(`${branchName}->${moduleName}`, function () {
            const chatActions = module.chatActions
            if (chatActions) {
                describe(`chatActions`, function () {
                    describe('command references', function () {
                        Object.keys(chatActions).forEach((chatActionName) => {
                            const chatAction = chatActions[chatActionName]

                            it(chatActionName, function () {
                                const commandName = module.commands[chatAction.command] !== undefined ? chatAction.command : chatActionName
                                assert(module.commands[commandName] !== undefined, 'has valid reference to command ' + commandName)
                            })
                        })
                    })
                })
            }
        })
    })
})
