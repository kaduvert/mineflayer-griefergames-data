module.exports = {
    chatPatterns: {
        activated: /^\[Chat\] Der Chat wurde von \S+ ┃ (\S+) verlangsamt\.$/,
        deactivated: /^\[Chat\] Der Chat wurde von \S+ ┃ (\S+) auf normal gestellt\.$/,
        spamWarning: /^\[GrieferGames\] Du kannst nur jede (\d+) Sekunden schreiben\.$/
    }
}
