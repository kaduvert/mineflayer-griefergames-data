module.exports = {
    chatPatterns: {
        playerNotFoundError: /^Fehler: Spieler nicht gefunden\.$/,
        playerNotFoundError: /^\[GrieferGames\] Der Spieler \S+ wurde nicht gefunden\.$/,
        playerNotFoundError: /^\[GrieferGames\] Der Spieler ist nicht online!$/,
    },
    nicknamePrefix: '~',
    commands: {
        getInventory: '/invsee $1',
        getEnderChest: '/ec $1',
        getMiscView: '/view $1'
    }
}
