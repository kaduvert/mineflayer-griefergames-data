module.exports = {
    chatPatterns: {
        noVotePresents: /^\[GrieferGames\] Du kannst keine weiteren Geschenke abholen\.$/,
        votePresentCollected: /^\[GrieferGames\] Du hast deine Geschenke abgeholt\.$/,
    },
    commands: {
        getInfo: '/vote',
        collectPresent: '/geschenk'
    },
    npc: {
        identifier: 'Vote-System',
        position: [129, 25, -18],
        world: 'stadt',
        onInteract: 'windowOpen',
        titleRegex: /^Vote-System$/,
    }
}
