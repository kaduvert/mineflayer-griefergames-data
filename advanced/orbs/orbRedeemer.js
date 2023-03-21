module.exports = {
    windowPatterns: {
        menu: /^Verkäufer$/
    },
    npc: {
        identifier: 'Verkäufer',
        position: [172, 25, -31],
        world: 'stadt',
        onInteract: 'windowOpen:orbRedeemer->menu',
    }
}