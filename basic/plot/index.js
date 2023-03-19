const PLOT_COMMAND_PREFIX = '/p '

module.exports = {
    chatPatterns: {
        plotInfoStart: /^-+ Grundstücksinfo -+$/,
        plotInfoEnd: /^-+ GrieferGames -+$/,
        plotTeleport: /^\[GrieferGames\] Du wurdest zum Grundstück teleportiert\.$/,
        plotFlagAdded: /^\[GrieferGames\] Die Flag wurde erfolgreich hinzugefügt$/, // source for error if . is added at the end
        plotGreeting: /^\[GrieferGames\] \[(-?\d+;-?\d+)\] .*$/,
        plotChatActivated: /^\[GrieferGames\] Die Einstellung chat wurde aktiviert\.$/, // merge?
        plotChatDeactivated: /^\[GrieferGames\] Die Einstellung chat wurde deaktiviert\.$/,
        plotChatMessage: /^\[Plot-Chat\]\[(-?\d+;-?\d+)\] \S+ ┃ (\S+) : (.*)$/,
        plotPlayerEntered: /^\[GrieferGames\] \[(-?\d+;-?\d+)\] ([^ ]+) betrat dein Grundstück\.$/,
        plotPlayerLeft: /^\[GrieferGames\] \[(-?\d+;-?\d+)\] ([^ ]+) verließ dein Grundstück\.$/,

        plotInvalidNumberError: /^\[GrieferGames\] Das ist keine gültige Zahl\.$/,
        plotDeniedError: /^\[GrieferGames\] Du bist auf diesem Grundstück gebannt\.$/,
        plotFlagMustBeSetError: /^\[GrieferGames\] Die Flag (\S+) muss gesetzt sein, damit du diese Aktion ausführen kannst\.$/,
        plotMissingPermission: /^\[GrieferGames\] Dir fehlt die Berechtigung (\S+)\.$/,
        plotUnclaimedError: /^\[GrieferGames\] Das Grundstück (-?\d+;-?\d+) hat bisher keinen Besitzer\.$/,
        plotOwnerPermissionError: /^\[GrieferGames\] Diese Aktion kann nur der Besitzer des Grundstücks ausführen\.$/,
        plotSethomeError: /^\[GrieferGames\] Du musst auf dem Grundstück vertraut sein, um den Spawn-Punkt des Grundstücks zu versetzen\.$/,
        plotNotFoundError: /^\[GrieferGames\] Dein Suchmuster ergab keine Treffer\.$/,
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
        getInfo: PLOT_COMMAND_PREFIX + 'i $1',
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