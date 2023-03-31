module.exports = {
    chatPatterns: {
        ticketPurchaseSuccess: /^$GG Du hast erfolgreich ein Los erworben\.$/,
        payout: /^$GG Du hast ([\d\.]+)\$ erhalten\.$/,

        noPayoutsError: /^$GG Es sind keine Gewinne verfügbar\.$/,
    },
    windowPatterns: {
        menu: /^Lotterie$/,
    },
    npc: {
        identifier: 'Lotterie',
        position: [139, 25, -30],
        world: 'stadt',
        onInteract: 'windowOpen:lottery->menu',
    }
}
