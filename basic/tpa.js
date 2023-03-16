module.exports = {
    tpaRequest: /^[^ ]+ ┃ ([^ ]+) möchte sich zu dir teleportieren\.$/,
    tpahereRequest: /^[^ ]+ ┃ ([^ ]+) möchte, dass du dich zu der Person teleportierst\.$/,
    tpaSent: /^Anfrage gesendet an \S+ ┃ (\S+)\.$/,
    tpaAccepted: /^\S+ | (\S+) hat deine Teleportierungsanfrage angenommen\.$/,
    tpaRefused: /^\S+ | (\S+) hat deine Teleportierungsanfrage abgelehnt\.$/,

    tpaActivated: /^Teleportation aktiviert\.$/,
    tpaDeactivated: /^Teleportation deaktiviert\.$/,
    tpaToggled: /^Fehler: \S+ ┃ (\S+) verweigert die Teleportierung\.$/,
    tpaDenied: /^Teleportierungsanfrage verweigert\.$/,

    tpaExpired: /^Fehler: Teleportierungsanfrage ist abgelaufen\.$/,
    tpaNull: /^Fehler: null$/,
    tpaNotFound: /^Fehler: Du hast keine Teleportierungsanfragen\.$/,
    tpaDisallowed: /^\[GrieferGames\] Du darfst auf diesem Grundstück keine Teleportationsbefehle ausführen\.$/,
    tpa: /^teleportieren zu [^ ]+ ┃ ([^ ]+)\.$/,
    tpaCancelled: /^Laufende Teleportierung abgebrochen\.$/,
    
    tpFailure: /^\[GrieferGames\] Du konntest nicht teleportiert werden\.$/,
    tpSpamWarning: /^Fehler: Zeit bis zur nächsten Teleportation: (now|\d+ Sekunden)$/,
    tpCountdown: /^Teleportierungsvorgang startet in (\d+) Sekunden\. Bewege dich nicht\.$/,
}
