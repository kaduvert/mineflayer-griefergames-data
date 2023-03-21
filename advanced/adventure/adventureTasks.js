module.exports = {
    chatPatterns: {
        accepted: /^\[Adventure\] Du hast die (.+) Aufgabe angenommen\.$/,
        completed: /^\[Adventure\] Du hast die (.+) Aufgabe erfolgreich abgeschlossen\. Du erhältst (\d+) Adventure-Coin\(s\)!$/
    },
    windowPatterns: {
        menu: /^Adventure-Jobs$/
    },
    npc: {
        identifier: 'Adventurer',
        position: [145, 24, 3],
        world: 'stadt',
        onInteract: 'windowOpen:adventureTasks->menu',
    }
}
