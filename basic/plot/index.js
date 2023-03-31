const COMMAND_PREFIX = '/p '

module.exports = {
    chatPatterns: {
        infoStart: /^-+ Grundstücksinfo -+$/,
        infoEnd: /^-+ GrieferGames -+$/,
        teleport: /^\[GrieferGames\] Du wurdest zum Grundstück teleportiert\.$/,
        flagAdded: /^\[GrieferGames\] Die Flag wurde erfolgreich hinzugefügt$/, // source for error if . is added at the end
        greeting: /^\[GrieferGames\] \[(-?\d+;-?\d+)\] .*$/,
        chatActivated: /^\[GrieferGames\] Die Einstellung chat wurde aktiviert\.$/, // merge?
        chatDeactivated: /^\[GrieferGames\] Die Einstellung chat wurde deaktiviert\.$/,
        chatMessage: /^\[Plot-Chat\]\[(-?\d+;-?\d+)\] \S+ ┃ (\S+) : (.*)$/,
        playerEntered: /^\[GrieferGames\] \[(-?\d+;-?\d+)\] ([^ ]+) betrat dein Grundstück\.$/,
        playerLeft: /^\[GrieferGames\] \[(-?\d+;-?\d+)\] ([^ ]+) verließ dein Grundstück\.$/,

        invalidNumberError: /^\[GrieferGames\] Das ist keine gültige Zahl\.$/,
        deniedError: /^\[GrieferGames\] Du bist auf diesem Grundstück gebannt\.$/,
        flagMustBeSetError: /^\[GrieferGames\] Die Flag (\S+) muss gesetzt sein, damit du diese Aktion ausführen kannst\.$/,
        missingPermissionError: /^\[GrieferGames\] Dir fehlt die Berechtigung (\S+)\.$/,
        unclaimedError: /^\[GrieferGames\] Das Grundstück (-?\d+;-?\d+) hat bisher keinen Besitzer\.$/,
        ownerPermissionError: /^\[GrieferGames\] Diese Aktion kann nur der Besitzer des Grundstücks ausführen\.$/,
        sethomeNotTrustedError: /^\[GrieferGames\] Du musst auf dem Grundstück vertraut sein, um den Spawn-Punkt des Grundstücks zu versetzen\.$/,
        notFoundError: /^\[GrieferGames\] Dein Suchmuster ergab keine Treffer\.$/,
    },
    arrayEndIndicator: ']',
    textFlagEndRegex: /, [a-z\_\-]:.+/,
    IdSeparator: ';',
    flagKeyValueSeparator: ':',
    multiLinePlotInfoRegex: /^ID: (-?\d+;-?\d+) \nAlias: ([^ ]+) \nBesitzer: +(.+) \nBiom: ([A-Z]+) \nHelfer: (.+) \nVertraut: (.+) \nVerboten: (.+) \nFlags: (.+)$/s,
    infoNoPlayersIndicator: 'Keine',
    flagsSeparater: ', ',
    flagTypes: {
        'time': 'Number',
        'music': 'Number',
        'use': 'Array',
        'break': 'Array',
        'place': 'Array',
        'description': 'Text',
        'greeting': 'Text',
        'farewell': 'Text'
    },
    commands: {
        goto: '/p h $1',
        getInfo: COMMAND_PREFIX + 'i $1',
    }
}

/*
plotInfo: [
    /^-+ Grundstücksinfo -+$/,
    /^ID: (-?\d+;-?\d+) $/,
    /^Alias: ([^ ]+) $/,
    /^Besitzer: +(.+) $/,
    /^Biom: ([A-Z]+) $/,
    /^Helfer: (.+) $/,
    /^Vertraut: (.+) $/,
    /^Verboten: (.+) $/,
    /^Flags: (.+)$/,
    /^-+ GrieferGames -+$/
]
*/