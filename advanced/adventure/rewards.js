module.exports = {
    windowPatterns: {
        adventureRewardMenu: /^Shop$/
    },
    npc: {
        identifier: 'Admin-Shop',
        position: [147, 24, 1],
        world: 'stadt',
        onInteract: 'windowOpen:adventureRewardMenu',
    }
}
