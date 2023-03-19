module.exports = {
    windowPatterns: {
        edgeConfigurationMenu: /^Rand-Konfigurator$/
    },
    npc: {
        identifier: 'Rand-Schmied',
        position: [140, 25, -54],
        world: 'stadt',
        onInteract: 'windowOpen:edgeConfigurationMenu',
    }
}
