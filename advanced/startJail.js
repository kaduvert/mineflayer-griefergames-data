const COMMAND_PREFIX = '/startjail '

module.exports = {
    chatPatterns: {
        purchaseSuccess: /^\[StartJail\] Du hast erfolgreich einen Gefängnis-Token gekauft\.$/,
        purchaseCancelled: /^\[StartJail\] Die Transaktion wurde abgebrochen\.$/,

        help: /^\[StartJail\] Verwende: \/startjail \<Spieler\> \<Grund\>\. $/,

        cooldownError: /^\[StartJail\] Bitte warte bis zum ([\d\.]+) ([\d:]+), um wieder eine Abstimmung zu starten\.$/,
        insufficientBalanceError: /^\[StartJail\] Dein Guthaben reicht leider nicht aus\.$/,
        noTokensError: /^\[StartJail\] Du hast keine Tokens mehr übrig\.$/
    },
    commands: {
        help: COMMAND_PREFIX,
        openMenu: COMMAND_PREFIX + 'buy',
        target: COMMAND_PREFIX + '$1 $2'
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
        menu: /^Gefängnis-Token$/,
        confirmPurchase: /^Kaufbestätigung$/
    },
    chatActions: {
        target: { // TODO: find solution
            successEvent: 'misc:startJail:',// + username,
            failureEvents: ['help', 'noTokensError']
        },
        openMenu: {
            successEvent: 'windowOpen:menu'
        }
    },
    windowActions: {
        menu: {
            startTokenPurchase: {
                itemToClick: 'purchaseToken',
                successEvent: 'windowOpen:confirmPurchase'
            }
        },
        confirmPurchase: {
            confirmTokenPurchase: {
                itemToClick: 'confirmPurchase',
                successEvent: 'purchaseSuccess',
                failureEvent: 'insufficientBalanceError'
            },
            cancelTokenPurchase: {
                itemToClick: 'cancelPurchase',
                successEvent: 'purchaseCancelled',
            }
        }
    }
}
