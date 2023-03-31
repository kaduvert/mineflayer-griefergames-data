const COMMAND_PREFIX = '/p '
const PLOT_ACTION_COMMAND_PREFIX = COMMAND_PREFIX + '$1 '

module.exports = {
    chatPatterns: {
        infoStart: /^-+ Grundstücksinfo -+$/,
        infoEnd: /^-+ GrieferGames -+$/,
        teleport: /^$GG Du wurdest zum Grundstück teleportiert\.$/,
        flagAdded: /^$GG Die Flag wurde erfolgreich hinzugefügt\.?$/, // currently, there is no . at the end
        greeting: /^$GG \[(-?\d+;-?\d+)\] .*$/,
        chatActivated: /^$GG Die Einstellung chat wurde aktiviert\.$/, // merge?
        chatDeactivated: /^$GG Die Einstellung chat wurde deaktiviert\.$/,
        chatMessage: /^\[Plot-Chat\] *\[(-?\d+;-?\d+)\] \S+ ┃ (\S+) : (.*)$/, // currently, there is no space between plot chat and id
        playerEntered: /^$GG \[(-?\d+;-?\d+)\] ([^ ]+) betrat dein Grundstück\.$/,
        playerLeft: /^$GG \[(-?\d+;-?\d+)\] ([^ ]+) verließ dein Grundstück\.$/,

        invalidNumberError: /^$GG Das ist keine gültige Zahl\.$/,
        deniedError: /^$GG Du bist auf diesem Grundstück gebannt\.$/,
        flagMustBeSetError: /^$GG Die Flag (\S+) muss gesetzt sein, damit du diese Aktion ausführen kannst\.$/,
        missingPermissionError: /^$GG Dir fehlt die Berechtigung (\S+)\.$/,
        unclaimedError: /^$GG Das Grundstück (-?\d+;-?\d+) hat bisher keinen Besitzer\.$/,
        ownerPermissionError: /^$GG Diese Aktion kann nur der Besitzer des Grundstücks ausführen\.$/,
        sethomeNotTrustedError: /^$GG Du musst auf dem Grundstück vertraut sein, um den Spawn-Punkt des Grundstücks zu versetzen\.$/,
        notFoundError: /^$GG Dein Suchmuster ergab keine Treffer\.$/,
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
        goto: COMMAND_PREFIX + 'h $1',
        getInfo: COMMAND_PREFIX + 'i $1',
        gotoMiddle: PLOT_ACTION_COMMAND_PREFIX + 'middle',

        setAlias: PLOT_ACTION_COMMAND_PREFIX + 'alias set $2',
        removeAlias: PLOT_ACTION_COMMAND_PREFIX + 'alias remove',

        setBiome: PLOT_ACTION_COMMAND_PREFIX + 'biome $2',

        kick: PLOT_ACTION_COMMAND_PREFIX + 'kick $2',
        ban: PLOT_ACTION_COMMAND_PREFIX + 'deny $2',

        add: PLOT_ACTION_COMMAND_PREFIX + 'add $2',
        trust: PLOT_ACTION_COMMAND_PREFIX + 'trust $2',

        remove: PLOT_ACTION_COMMAND_PREFIX + 'remove $2',

        setDescription: PLOT_ACTION_COMMAND_PREFIX + 'desc $2',
        removeDescription: PLOT_ACTION_COMMAND_PREFIX + 'desc',

        setFlag: PLOT_ACTION_COMMAND_PREFIX + 'flag set $2 $3'
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