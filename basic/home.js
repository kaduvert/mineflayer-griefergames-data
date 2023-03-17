module.exports = {
    chatPatterns: {
        homeList: /^\[GrieferGames\] Deine Home-Punkte: (.+)$/,
        homesUnset: /^\[GrieferGames\] Du hast bisher (keine)n Home-Punkt erstellt\.$/,

        homeSet: /^\[GrieferGames\] Der Home-Punkt wurde auf deine aktuelle Position gesetzt\.$/,
        homeDeleted: /^\[GrieferGames\] Der Home-Punkt (\S+) wurde gelöscht\.$/,

        homeNotFoundError: /^\[GrieferGames\] Der Home-Punkt (\S+) wurde nicht gefunden. Nutze \/sethome, um diesen zu setzen\.$/,
    },
    commands: {
        getHomes: '/homes',
        setHome: '/sethome $1',
        deleteHome: '/delhome $1',
        teleportTo: '/home $1'
    }
}
