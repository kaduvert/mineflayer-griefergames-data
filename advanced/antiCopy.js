module.exports = {
	chatPatterns: {
		protectionAdded: /^\[AntiCopy\] Deine Karte ist nun geschützt\.$/,
		protectionRemoved: /^\[AntiCopy\] Der Schutz deiner Karte wurde entfernt\.$/,

		notOwnerError: /^\[AntiCopy\] Du kannst nur den Schutz deiner Karten ausschalten\.$/,
		spamWarning: /^\[AntiCopy\] Du kannst diesen Befehl nur alle (\d+) Sekunden ausführen\.$/,
	},
	loreRegex: /^Ersteller der Karte: (\S+)$/,
	commands: {
		toggleProtection: '/anticopy'
	}
}
