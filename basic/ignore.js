module.exports = {
    chatPatterns: {
        add: /^Du ignorierst ab jetzt Spieler (\S+)\.$/,
        remove: /^Du ignorierst Spieler (\S+) nicht mehr\.$/,
        list: /^Ignoriert: (.+)$/,
        listEmpty: /^Du ignoriest niemanden\.$/
    },
    commands: {
		list: IGNORE_COMMAND_PREFIX,
		target: IGNORE_COMMAND_PREFIX + '$1',
    }
}