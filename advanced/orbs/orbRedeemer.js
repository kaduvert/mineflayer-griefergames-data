module.exports = {
    windowPatterns: {
        orbRedeemMenu: /^Verkäufer$/
    },
    npc: {
        identifier: 'Verkäufer',
        position: [172, 25, -31],
        world: 'stadt',
        onInteract: 'windowOpen:orbRedeemMenu',
    }
}