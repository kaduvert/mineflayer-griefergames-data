const IGNORE_COMMAND_PREFIX = '/ignore '

module.exports = {
	chatPatterns: {
		privateChatReceivedMessage: /^\[\S+ ┃ (\S+) -> mir\] (.*)$/,
		privateChatSentMessage: /^\[mir -> \S+ ┃ (\S+)\] (.*)$/,
		
		privateChatActivated: /^Das Empfangen von Nachrichten wurde aktiviert.$/,
		privateChatDeactivated: /^Das Empfangen von Nachrichten wurde deaktiviert\.$/,
		receiverToggledMessagesError: /^\S+ ┃ (\S+) hat Nachrichten deaktiviert\.$/,

		ignoreAdd: /^Du ignorierst ab jetzt Spieler (\S+)\.$/,
		ignoreRemove: /^Du ignorierst Spieler (\S+) nicht mehr\.$/,
		ignoreList: /^Ignoriert: (.+)$/,
		ignoreListEmpty: /^Du ignoriest niemanden\.$/
	},
	commands: {
		send: '/msg $1 $2',
		ignoredList: IGNORE_COMMAND_PREFIX,
		ignore: IGNORE_COMMAND_PREFIX + '$1',
		toggle: '/msgtoggle',
	}
}