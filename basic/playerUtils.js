module.exports = {
    chatPatterns: {
        playerNotFoundError: /^Fehler: Spieler nicht gefunden\.$/,
        playerNotFoundError: /^$GG Der Spieler \S+ wurde nicht gefunden\.$/,
        playerNotFoundError: /^$GG Der Spieler ist nicht online!$/,
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
    }
}
