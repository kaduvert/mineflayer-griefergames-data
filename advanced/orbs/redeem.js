module.exports = {
    windowPatterns: {
        orbsTradeMenu: /^Händler$/
    },
    npc: {
        identifier: 'Händler',
        position: [172, 25, -42],
        world: 'stadt',
        onInteract: 'windowOpen:orbsTradeMenu',
    }
}

/*
main = {
    titleRegex: /^Händler$/,
    itemPatterns: {
        orbBalance: {
            titleRegex: /^Deine Orbs$/,
            loreRegex: [
                /^Du besitzt aktuell (\d+\.) Orbs\.$/
            ]
        },
        materialCategory: {
            titleRegex: /^(.+)$/,
            loreRegex: [
                /^Die Kategorie (.+) umfasst alle Items, (?:die|welche)$/,
                /^(.+)$/
            ]
        }
    }
}
*/