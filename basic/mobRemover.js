module.exports = {
    chatPatterns: {
        nextIn: /^\[MobRemover\] Achtung, in (\d+) Minuten? werden alle Tiere gelöscht\.$/,
        removedMobs: /^\[MobRemover\] Es wurden (\d+) Tiere entfernt\.$/,
    },
    cycleTime: 20 * 60 * 1000
}
