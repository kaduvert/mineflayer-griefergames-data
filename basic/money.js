module.exports = {
    chatPatterns: {
        moneyCredited: /^\$(\d+) wurden zu deinem Konto hinzugefügt\.$/,
        moneyTransferred: /^Du hast \S+ ┃ (\S+) \$([\d,\.]+) gegeben\.$/,
        moneyReceived: /^\S+ ┃ (\S+) hat dir \$([\d,\.]+) gegeben\.$/,

        moneyInsufficientError: /^Fehler: Du hast nicht genug Guthaben\.$/,
        moneyPlayerOfflineError: /^\[GrieferGames\] Dieser Spieler wurde nicht gefunden\.$/,
    }
}
