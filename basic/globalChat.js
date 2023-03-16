module.exports = {
    regex: {
        globalChatMessage: /^@\[(\S+)\] (\S+) ┃ (\S+) » (.*)$/,
        globalChatDeactivatedError: /^\[GlobalChat\] Du kannst nicht im Global-Chat schreiben, da du ihn deaktiviert hast\.$/,

        globalChatActivated: /^\[GlobalChat\] Du hast den Global-Chat aktiviert\.$/,
        globalChatDeativated: /^\[GlobalChat\] Du hast den Global-Chat deaktiviert\.$/,

        globalChatAlreadyActivated: /^\[GlobalChat\] Der Global-Chat ist bereits aktiviert\.$/,
        globalChatAlreadyDeativated: /^\[GlobalChat\] Der Global-Chat ist bereits deaktiviert\.$/,

        globalChatServerMuted: /^\[GlobalChat\] Du hast den Server (.+) gemutet\.$/,
        globalChatServerMuted: /^\[GlobalChat\] Du hast den Server (.+) entmutet\.$/,
    }
}
