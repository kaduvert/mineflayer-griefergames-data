module.exports = {
    chatPatterns: {
        presentCollected: /^\[GrieferGames\] Du hast deine Geschenke abgeholt\.$/,
        noPresentsError: /^\[GrieferGames\] Du kannst keine weiteren Geschenke abholen\.$/,
    },
    commands: {
        getInfo: '/vote',
        collectPresent: '/geschenk'
    },
    windowPatterns: {
        streakMenu: /^Vote-System$/
    },
    npc: {
        identifier: 'Vote-System',
        position: [129, 25, -18],
        world: 'stadt',
        onInteract: 'windowOpen:vote->streakMenu'
    }
}
