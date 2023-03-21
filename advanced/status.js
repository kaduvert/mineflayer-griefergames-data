const STATUS_COMMAND_PREFIX = '/status '

module.exports = {
	chatPatterns: {
		set: /^\[Status\] Du hast '(.+)' als Status gesetzt\.$/,
		activated: /^\[Status\] Du hast den Status beim Joinen aktiviert\.$/,
		deactivated: /^\[Status\] Du hast den Status beim Joinen deaktiviert\.$/,
	},
	commands: {
		set: STATUS_COMMAND_PREFIX + '$1',
		toggle: STATUS_COMMAND_PREFIX + 'toggle',
	}
}
