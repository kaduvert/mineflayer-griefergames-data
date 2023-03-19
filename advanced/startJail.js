const STARTJAIL_COMMAND_PREFIX = '/startjail '

module.exports = {
    chatPatterns: {
        purchaseSuccess: /^\[StartJail\] Du hast erfolgreich einen Gefängnis-Token gekauft\.$/,
        purchaseCancelled: /^\[StartJail\] Die Transaktion wurde abgebrochen\.$/,

        startJailHelp: /^\[StartJail\] Verwende: \/startjail \<Spieler\> \<Grund\>\. $/,

        insufficientBalanceError: /^\[StartJail\] Dein Guthaben reicht leider nicht aus\.$/,
        noTokensError: /^\[StartJail\] Du hast keine Tokens mehr übrig\.$/
    },
    commands: {
        help: STARTJAIL_COMMAND_PREFIX,
        openWindow: STARTJAIL_COMMAND_PREFIX + 'buy',
        target: STARTJAIL_COMMAND_PREFIX + '$1 $2'
    },
    itemPatterns: {
        purchaseToken: {
            title: /^Gefängins-Token kaufen$/,
            lore: [
                /^Klicke, um einen Token für (\d+)\$ zu kaufen\.$/
            ]
        },
        tokenBalance: {
            title: /^Anzahl der Gefängnis-Tokens$/,
            lore: [
                /^Gefängnis-Tokens: (\d+)$/
            ]
        },
        confirmPurchase: {
            title: /^Ja\.$/,
            lore: [
                /^Klicke, um den Kauf zu bestätigen\.$/
            ]
        },
        cancelPurchase: {
            title: /^Nein\.$/,
            lore: [
                /^Klicke, um den Kauf abzubrechen\.$/
            ]
        },
    },
    windowPatterns: {
        startJailMenu: /^Gefängnis-Token$/,
        confirmPurchase: /^Kaufbestätigung$/
    }
}
