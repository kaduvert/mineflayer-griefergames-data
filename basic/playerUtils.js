module.exports = {
    chatPatterns: {
        playerNotFoundError: /^Fehler: Spieler nicht gefunden\.$/,
        /*
        playerNotFoundError: /^$GG Der Spieler \S+ wurde nicht gefunden\.$/,
        playerNotFoundError: /^$GG Der Spieler ist nicht online!$/,
        */
    },
    nicknamePrefix: '~',
    commands: {
        getInventory: '/invsee $1',
        getEnderChest: '/ec $1',
        getMiscView: '/view $1'
    },
    windowPatterns: {
        inventory: /^Inventory$/,
        enderChest: /^Ender Chest$/,
        miscView: /^Ansicht - (\S+)$/,
    },
    chatActions: {
        getInventory: {
            successEvent: 'windowOpen:inventory',
            failureEvent: 'playerNotFoundError'
        },
        getEnderChest: {
            successEvent: 'windowOpen:enderChest',
            failureEvent: 'playerNotFoundError'
        },
        getMiscView: {
            successEvent: 'windowOpen:miscView',
            failureEvent: 'playerNotFoundError'
        }
    }
}
