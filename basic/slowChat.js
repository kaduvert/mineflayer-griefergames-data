module.exports = {
    chatPatterns: {
        slowChatActivated: /^\[Chat\] Der Chat wurde von \S+ ┃ (\S+) verlangsamt\.$/,
        slowChatDeactivated: /^\[Chat\] Der Chat wurde von \S+ ┃ (\S+) auf normal gestellt\.$/,
        spamWarning: /^\[GrieferGames\] Du kannst nur jede (\d+) Sekunden schreiben\.$/
    }
}
