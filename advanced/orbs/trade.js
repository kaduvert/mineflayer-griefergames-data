module.exports = {
    windowPatterns: {
        orbsRedeemMenu: /^Verkäufer$/
    },
    npc: {
        identifier: 'Verkäufer',
        position: [172, 25, -31],
        world: 'stadt',
        onInteract: 'windowOpen:orbsRedeemMenu',
    }
}

/*
unnamedWindow = {
    titleRegex: /^Verkäufer$/,
    meaningfulSlots: {
        unnamedSlot: {
            titleRegex: /^Deine Orbs$/,
            loreRegex: [
                /^Du besitzt aktuell 190.181 Orbs.$/
            ]
        },
        unnamedSlot: {
            titleRegex: /^Perks$/,
            loreRegex: [
                /^Kaufe dir drei der 14 Perks durch Orbs.$/,
                /^$/,
                /^Klicke, um zu der Perk-Auswahl zu gelangen.$/
            ]
        },
        unnamedSlot: {
            titleRegex: /^Partikel$/,
            loreRegex: [
                /^Kaufe dir spezielle Partikel durch Orbs.$/,
                /^$/,
                /^Klicke, um zu den Partikel zu gelangen.$/
            ]
        },
        unnamedSlot: {
            titleRegex: /^spezielle Items$/,
            loreRegex: [
                /^Kaufe dir spezielle Items durch Orbs.$/,
                /^$/,
                /^Klicke, um zu den speziellen Items zu gelangen.$/
            ]
        },
        unnamedSlot: {
            titleRegex: /^Orb-Rüstung$/,
            loreRegex: [
                /^Kaufe dir die neue Orb-Rüstung.$/,
                /^$/,
                /^Klicke, um zur Orb-Rüstung zu gelangen.$/
            ]
        },
        unnamedSlot: {
            titleRegex: /^Farming-Items$/,
            loreRegex: [
                /^Kaufe dir spezielle Farming-Items durch Orbs.$/,
                /^$/,
                /^Klicke, um zu den Farming-Items zu gelangen.$/
            ]
        },
    }
}
*/
