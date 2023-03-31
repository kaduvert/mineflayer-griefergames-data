module.exports = {
    chatPatterns: {
        credited: /^\$(\d+) wurden zu deinem Konto hinzugefügt\.$/,
        transferred: /^Du hast \S+ ┃ (\S+) \$([\d,\.]+) gegeben\.$/,
        received: /^\S+ ┃ (\S+) hat dir \$([\d,\.]+) gegeben\.$/,

        insufficientError: /^Fehler: Du hast nicht genug Guthaben\.$/,
        playerOfflineError: /^$GG Dieser Spieler wurde nicht gefunden\.$/,
    },
    commands: {
        transfer: '/pay $1 $2'
    }
}
