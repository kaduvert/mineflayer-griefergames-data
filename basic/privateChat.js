const IGNORE_COMMAND_PREFIX = '/ignore '

module.exports = {
	chatPatterns: {
		receivedMessage: /^\[\S+ ┃ (\S+) -> mir\] (.*)$/,
		sentMessage: /^\[mir -> \S+ ┃ (\S+)\] (.*)$/,
		
		activated: /^Das Empfangen von Nachrichten wurde aktiviert.$/,
		deactivated: /^Das Empfangen von Nachrichten wurde deaktiviert\.$/,
		receiverToggledMessagesError: /^\S+ ┃ (\S+) hat Nachrichten deaktiviert\.$/,
	},
	commands: {
		send: '/msg $1 $2',
		ignoredList: IGNORE_COMMAND_PREFIX,
		ignore: IGNORE_COMMAND_PREFIX + '$1',
		toggle: '/msgtoggle',
	}
}