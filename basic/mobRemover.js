module.exports = {
    regex: {
        mobRemoverIn: /^\[MobRemover\] Achtung, in (\d+) Minuten? werden alle Tiere gelöscht\.$/,
        mobRemover: /^\[MobRemover\] Es wurden (\d+) Tiere entfernt\.$/,
    },
    cycleTime: 20 * 60 * 1000
}
