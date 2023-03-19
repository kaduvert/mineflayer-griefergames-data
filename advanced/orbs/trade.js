module.exports = {
    npc: {
        identifier: 'Verkäufer',
        position: [172, 25, -31],
        world: 'stadt',
        onInteract: 'windowOpen',
        titleRegex: /^Verkäufer$/,
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
            itemId: 'stone:4',
            titleRegex: /^(.+)$/,
            loreRegex: [
                /^Die Kategorie (.+) umfasst alle Items, (?:die|welche)$/,
                /^(.+)$/
            ]
        }
    }
}
*/