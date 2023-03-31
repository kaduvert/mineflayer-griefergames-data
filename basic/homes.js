module.exports = {
    chatPatterns: {
        list: /^$GG Deine Home-Punkte: (.+)$/,
        unset: /^$GG Du hast bisher (keine)n Home-Punkt erstellt\.$/,

        set: /^$GG Der Home-Punkt wurde auf deine aktuelle Position gesetzt\.$/,
        deleted: /^$GG Der Home-Punkt (\S+) wurde gelöscht\.$/,

        notFoundError: /^$GG Der Home-Punkt (\S+) wurde nicht gefunden. Nutze \/sethome, um diesen zu setzen\.$/,
    },
    commands: {
        get: '/homes',
        set: '/sethome $1',
        delete: '/delhome $1',
        teleportTo: '/home $1'
    }
}
