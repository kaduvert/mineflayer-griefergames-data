module.exports = {
    chatPatterns: {
        playerList: /^Spieler in der Nähe: (.+)$/
    },
    commands: {
        getPlayers: '/near $1'
    },
    playerListSeparator: ', ',
    playerListRegex: /^\S+ ┃ (\S+)\((\d+)m\)$/
}
