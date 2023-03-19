module.exports = {
    chatPatterns: {
        
        spawnerAlreadyOpenedError: /^\[GrieferGames\] Der Spawner ist aktuell von (\S+) geöffnet\.$/,
        noSpawnerOpenPermissionsError: /^\[GrieferGames\] Du hast aktuell keinen Zugriff auf den Spawner\.$/

        /*
        spawnerPassiveModeActivated: /^\[GrieferGames\] Der Passiv-Modus des Spawners wurde aktiviert\.$/,
        [GrieferGames] Der Zugriff auf das Lager ist nun gesperrt.
        [GrieferGames] Der Zugriff auf das Lager ist nun freigegeben.
        [GrieferGames] Der Zugriff auf die Einstellungen wurde für vertraute Spieler aktiviert.
        [GrieferGames] Du musst einen Moment warten, bis du das wieder verwenden kannst.
        [GrieferGames] Der Zugriff auf die Einstellungen wurde für vertraute Spieler deaktiviert.
        [GrieferGames] Der Spawner ist nicht freigegeben.
        */
    },
    windowPatterns: {
        inactiveSpawnerMenu: /^Spawner - Aktivieren$/,
        spawnerStorage: /^Spawner - Lager$/,
        spawnerStats: /^Spawner - Statistik$/,
    },
    itemPatterns: {
        // deactivated spawner stuff
        stats: {
            title: /^(.+)$/,
            lore: [
                /^Klicke, um zur Statistik zu gelangen\.$/,
                /^Die Statistik aktualisiert sich nur einmal am Tag\.$/
            ]
        },
        activatePassiveMode: {
            title: /^Passiv-Modus aktivieren$/,
            lore: [
                /^Klicke, um den passiven Modus zu aktivieren\.$/
            ]
        },

        // activated spawner stuff
        lockedSlot: {
            title: /^Upgrade-Stufe ([IVX]+)$/
        },
        availableExperience: {
            title: /^Aktuelle Erfahrungspunkte$/,
            lore: [
                /^(\d+) Erfahrungspunkte$/
            ]
        },
        nextUpdate: {
            title: /^Nächste Aktualisierung$/,
            lore: [
                /^([\d\.]+) ([\d:]+) Uhr$/
            ]
        },
        settings: {
            title: /^Einstellungen$/,
            lore: [
                /^Klicke, um zu den Einstellungen zu kommen\.$/
            ]
        },

        // spawner menu stuff
        upgrade: {
            title: /^(\S+)-Upgrade-Stufe ([IVX]+)$/,
            lore: [
                /^Erhöht (.+)$/
            ]
        },
        itemFilter: {
            lore: [
                /^Schalte den Item-Filter frei,$/,
                /^um den Drop zu deaktivieren\.$/
            ]
        },
        filterUpgrade: {
            title: /^Filter-Upgrade$/,
            lore: [
                /^Lässt Item-Drops \(de-\)aktivieren\.$/,
                /^Kosten: (.+)$/
            ]
        },
        back: {
            title: /^Zurück$/,
            lore: [
                /^Klicke, um auf die vorherige Seite zu gelangen\.$/
            ]
        },
        deactivatePassiveMode: {
            title: /^Passiv-Modus deaktivieren$/,
            lore: [
                /^Klicke, um den passiven Modus zu deaktivieren\.$/,
                /^Du kannst alle (\d+) Minuten den Modus ändern\.$/
            ]
        }
    }
}

/*
unnamedSlot: {
    titleRegex: /^Spawner nicht freigegeben$/,
        loreRegex: [
            /^Um den Spawner für andere freizugeben,$/,
            /^füge die Use-Flag 52 deinem Grundstück hinzu.$/
        ]
},
unnamedSlot: {
    titleRegex: /^Zugriff für Besitzer$/,
        loreRegex: [
            /^Klicke, um den Zugriff auf die Einstellungen zu beschränken.$/,
            /^Aktuell: Zugriff nur für Besitzer$/
        ]
}
*/