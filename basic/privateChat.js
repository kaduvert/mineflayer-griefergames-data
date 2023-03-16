module.exports = {
	regex: {
		privateChatReceivedMessage: /^\[\S+ ┃ (\S+) -> mir\] (.*)$/,
		privateChatSentMessage: /^\[mir -> \S+ ┃ (\S+)\] (.*)$/,
	}
}