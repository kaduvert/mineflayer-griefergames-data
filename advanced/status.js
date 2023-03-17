const STATUS_COMMAND_PREFIX = '/status '

module.exports = {
	chatPatterns: {
		statusMessageSet: /^\[Status\] Du hast '(.+)' als Status gesetzt\.$/,
		statusActivated: /^\[Status\] Du hast den Status beim Joinen aktiviert\.$/,
		statusDeactivated: /^\[Status\] Du hast den Status beim Joinen deaktiviert\.$/,
	},
	commands: {
		set: STATUS_COMMAND_PREFIX + '$1',
		toggle: STATUS_COMMAND_PREFIX + 'toggle',
	}
}
