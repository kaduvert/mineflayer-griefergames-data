module.exports = {
    chatPatterns: {
        warpList: /^Warp-Punkte: (.+)$/,
        warpTeleport: /^Teleportiere zu Warp-Punkt (\S+)\.$/,
    },
    commands: {
        getList: '/warps',
        to: '/warp $1'
    }
}
