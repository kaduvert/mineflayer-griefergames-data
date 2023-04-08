module.exports = {
    chatPatterns: {
        saleSuccessful: /^\[Orbs\] Du hast erfolgreich ([\d\.]+) (.+) für ([\d\.]+) Orbs verkauft\.$/
    },
    windowPatterns: {
        menu: /^Händler$/,
        sellItem: /^Orbs - Verkauf (.+)$/
    },
    itemPatterns: {
        sellOption: {
            display: [
                /^(.+) (.+)$/,
                /^Klicke, um ([\d\.]+) (.+) für ([\d\.]+) Orbs zu verkaufen\.$/
            ]
        }
    },
    npc: {
        identifier: 'Händler',
        position: [172, 25, -42],
        world: 'stadt',
        onInteract: 'windowOpen:orbTrader->menu',
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
            display: [
                /^Klicke, um ein Gras für 20 Orbs zu verkaufen.$/
            ]
    },
    unnamed: {
        title: /^64 Gras$/,
            display: [
                /^Klicke, um 64 Gras für 1.280 Orbs zu verkaufen.$/
            ]
    },
    unnamed: {
        title: /^Gesamtes Gras$/,
            display: [
                /^Klicke, um 0 Gras für 0 Orbs zu verkaufen.$/
            ]
    },
    unnamed: {
        title: /^Preisfall$/,
            display: [
                /^Aktuell können 10.000 Gras verkauft werden,$/,
                /^bevor der Preis fällt.$/,
                /^Stufe: 1/2$ /
        ]
    },
    unnamed: {
        title: /^Zurück zur vorherigen Seite$/,
            display: [
                /^Klicke, um zur vorherigen Seite zurückzugelangen.$/
            ]
    },
}