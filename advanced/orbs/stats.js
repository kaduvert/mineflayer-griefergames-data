module.exports = {
    windowPatterns: {
        orbsStatsMenu: /^Statistik von (\S+)$/,
    },
    npc: {
        identifier: 'Statistik',
        position: [140, 25, -39],
        world: 'stadt',
        onInteract: 'windowOpen:orbsStatsMenu',
    }
}
