const COMMAND_PREFIX = '/ignore '

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
		toggle: '/msgtoggle',
	}
}