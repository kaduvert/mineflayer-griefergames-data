module.exports = {
    chatPatterns: {
        request: /^[^ ]+ ┃ ([^ ]+) möchte sich zu dir teleportieren\.$/,
        hereRequest: /^[^ ]+ ┃ ([^ ]+) möchte, dass du dich zu der Person teleportierst\.$/,
        sent: /^Anfrage gesendet an \S+ ┃ (\S+)\.$/,
        accepted: /^\S+ | (\S+) hat deine Teleportierungsanfrage angenommen\.$/,
        refused: /^\S+ | (\S+) hat deine Teleportierungsanfrage abgelehnt\.$/,

        activated: /^Teleportation aktiviert\.$/,
        deactivated: /^Teleportation deaktiviert\.$/,
        toggled: /^Fehler: \S+ ┃ (\S+) verweigert die Teleportierung\.$/,
        denied: /^Teleportierungsanfrage verweigert\.$/,

        expiredError: /^Fehler: Teleportierungsanfrage ist abgelaufen\.$/,
        nullError: /^Fehler: null$/,
        notFoundError: /^Fehler: Du hast keine Teleportierungsanfragen\.$/,
        disallowedError: /^\[GrieferGames\] Du darfst auf diesem Grundstück keine Teleportationsbefehle ausführen\.$/,
        
        tpa: /^teleportieren zu [^ ]+ ┃ ([^ ]+)\.$/,
        cancelled: /^Laufende Teleportierung abgebrochen\.$/,

        tpFailure: /^\[GrieferGames\] Du konntest nicht teleportiert werden\.$/,
        tpSpamWarning: /^Fehler: Zeit bis zur nächsten Teleportation: (now|\d+ Sekunden)$/,
        tpCountdown: /^Teleportierungsvorgang startet in (\d+) Sekunden\. Bewege dich nicht\.$/,
    },
    commands: {
        request: '/tpa $1',
        requestHere: '/tpahere $1',
        accept: '/tpaccept',
        deny: '/tpdeny',
        toggle: '/tptoggle'
    }
}
