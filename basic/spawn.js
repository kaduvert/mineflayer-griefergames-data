module.exports = {
    chatPatterns: {
        teleport: /^Teleportiere\.\.\.$/
    },
    commands: {
        teleport: '/spawn'
    },
    chatActions: {
        teleport: {
            successEvent: 'forcedMove',
            failureEvent: 'spamWarning'
        } // TODO: use teleport.js data
    }
}
