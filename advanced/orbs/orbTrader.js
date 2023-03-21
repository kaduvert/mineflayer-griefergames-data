module.exports = {
    chatPatterns: {
        orbSaleSuccessful: /^\[Orbs\] Du hast erfolgreich ([\d\.]+) (.+) für ([\d\.]+) Orbs verkauft\.$/
    },
    windowPatterns: {
        orbTradeMenu: /^Händler$/,
        orbSellItem: /^Orbs - Verkauf (.+)$/
    },
    itemPatterns: {
        sellOption: {
            title: /^(.+) (.+)$/,
            lore: [
                /^Klicke, um ([\d\.]+) (.+) für ([\d\.]+) Orbs zu verkaufen\.$/
            ]
        }
    },
    npc: {
        identifier: 'Händler',
        position: [172, 25, -42],
        world: 'stadt',
        onInteract: 'windowOpen:orbTradeMenu',
    },
    windowSafeAfter: 250,
}

/*
main = {
    titleRegex: /^Händler$/,
    itemPatterns: {
        orbBalance: {
            
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

windowPatterns: {
    unnamed: /^Orbs - Verkauf Gras$/
},
itemPatterns: {
    unnamed: {
        title: /^Ein Gras$/,
            lore: [
                /^Klicke, um ein Gras für 20 Orbs zu verkaufen.$/
            ]
    },
    unnamed: {
        title: /^64 Gras$/,
            lore: [
                /^Klicke, um 64 Gras für 1.280 Orbs zu verkaufen.$/
            ]
    },
    unnamed: {
        title: /^Gesamtes Gras$/,
            lore: [
                /^Klicke, um 0 Gras für 0 Orbs zu verkaufen.$/
            ]
    },
    unnamed: {
        title: /^Preisfall$/,
            lore: [
                /^Aktuell können 10.000 Gras verkauft werden,$/,
                /^bevor der Preis fällt.$/,
                /^Stufe: 1/2$ /
        ]
    },
    unnamed: {
        title: /^Zurück zur vorherigen Seite$/,
            lore: [
                /^Klicke, um zur vorherigen Seite zurückzugelangen.$/
            ]
    },
}