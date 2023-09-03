module.exports = {
    chatPatterns: {
        placeSuccess: /^\[Teleporter\] Der Teleporter wurde erfolgreich gesetzt\.$/,
        breakSuccess: /^\[Teleporter\] Du hast den Teleporter entfernt\.$/,

        teleportSuccess: /^\[Teleporter\] Du befindest dich nun bei Teleporter (.+)\.$/,
        noPreviousTeleporterError: /^\[Teleporter\] Es gibt keinen weiteren Teleporter vor diesem!$/,
        noFurtherTeleporterError: /^\[Teleporter\] Es gibt keinen weiteren Teleporter nach diesem!$/
    },
    commands: {
        // does nothing
        main: '/teleporter'
    },
    itemPatterns: {
        currentPosition: {
            display: [
                /^Aktuelle Position$/,
                /^Du befindest dich gerade bei (.+)\.$/
            ]
        },
        destination: {
            display: [
                /^(.+)$/
            ],
            name: 'skull'
        }
    },
    windows: {
        selectDestination: {
            titlePattern: /^GS-Teleporter$/,
            requiredSlots: 0
        }
    }
}
