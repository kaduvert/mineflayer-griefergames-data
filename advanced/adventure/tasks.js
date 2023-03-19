module.exports = {
    windowPatterns: {
        adventureTasksMenu: /^Adventure-Jobs$/
    },
    npc: {
        identifier: 'Adventurer',
        position: [145, 24, 3],
        world: 'stadt',
        onInteract: 'windowOpen:adventureTasksMenu',
    }
}
