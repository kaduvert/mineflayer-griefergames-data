module.exports = {
    chatPatterns: {
        taskAccepted: /^\[Adventure\] Du hast die (.+) Aufgabe angenommen\.$/,
        taskCompleted: /^\[Adventure\] Du hast die (.+) Aufgabe erfolgreich abgeschlossen\. Du erhältst (\d+) Adventure-Coin\(s\)!$/
    },
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
