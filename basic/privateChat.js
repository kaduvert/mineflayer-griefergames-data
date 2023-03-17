module.exports = {
	chatPatterns: {
		privateChatReceivedMessage: /^\[\S+ ┃ (\S+) -> mir\] (.*)$/,
		privateChatSentMessage: /^\[mir -> \S+ ┃ (\S+)\] (.*)$/,
	},
	commands: {
		send: '/msg $1 '
	}
}