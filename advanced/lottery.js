module.exports = {
    chatPatterns: {
        ticketPurchaseSuccess: /^\[GrieferGames\] Du hast erfolgreich ein Los erworben\.$/,
        payout: /^\[GrieferGames\] Du hast ([\d\.]+)\$ erhalten\.$/,

        noPayoutsError: /^\[GrieferGames\] Es sind keine Gewinne verfügbar\.$/,
    },
    windowPatterns: {
        lotteryMenu: /^Lotterie$/,
    },
    npc: {
        identifier: 'Lotterie',
        position: [139, 25, -30],
        world: 'stadt',
        onInteract: 'windowOpen:lotteryMenu',
    }
}
