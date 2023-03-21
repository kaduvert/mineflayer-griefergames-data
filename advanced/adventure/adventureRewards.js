module.exports = {
    windowPatterns: {
        menu: /^Shop$/
    },
    npc: {
        identifier: 'Admin-Shop',
        position: [147, 24, 1],
        world: 'stadt',
        onInteract: 'windowOpen:adventureRewards->menu',
    }
}
