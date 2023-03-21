module.exports = {
    chatPatterns: {
        list: /^\[GrieferGames\] Deine Home-Punkte: (.+)$/,
        unset: /^\[GrieferGames\] Du hast bisher (keine)n Home-Punkt erstellt\.$/,

        set: /^\[GrieferGames\] Der Home-Punkt wurde auf deine aktuelle Position gesetzt\.$/,
        deleted: /^\[GrieferGames\] Der Home-Punkt (\S+) wurde gelöscht\.$/,

        notFoundError: /^\[GrieferGames\] Der Home-Punkt (\S+) wurde nicht gefunden. Nutze \/sethome, um diesen zu setzen\.$/,
    },
    commands: {
        get: '/homes',
        set: '/sethome $1',
        delete: '/delhome $1',
        teleportTo: '/home $1'
    }
}
