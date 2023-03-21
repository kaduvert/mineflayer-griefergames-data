const GLOBALCHAT_COMMAND_PREFIX = '/globalchat '

module.exports = {
    chatPatterns: {
        message: /^@\[(\S+)\] (\S+) ┃ (\S+) » (.*)$/,
        deactiveError: /^\[GlobalChat\] Du kannst nicht im Global-Chat schreiben, da du ihn deaktiviert hast\.$/,

        activated: /^\[GlobalChat\] Du hast den Global-Chat aktiviert\.$/,
        deactivated: /^\[GlobalChat\] Du hast den Global-Chat deaktiviert\.$/,

        alreadyActivatedError: /^\[GlobalChat\] Der Global-Chat ist bereits aktiviert\.$/,
        alreadyDeativatedError: /^\[GlobalChat\] Der Global-Chat ist bereits deaktiviert\.$/,

        serverMuted: /^\[GlobalChat\] Du hast den Server (.+) gemutet\.$/,
        serverUnmuted: /^\[GlobalChat\] Du hast den Server (.+) entmutet\.$/,
    },
    commands: {
        login: GLOBALCHAT_COMMAND_PREFIX + 'login',
        logout: GLOBALCHAT_COMMAND_PREFIX + 'logout',
        send: '@$1',
    }
}
