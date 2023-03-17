module.exports = {
	chatPatterns: {
		mapAntiCopyProtectionAdded: /^\[AntiCopy\] Deine Karte ist nun geschützt\.$/,
		mapAntiCopyProtectionRemoved: /^\[AntiCopy\] Der Schutz deiner Karte wurde entfernt\.$/,

		mapAntiCopyNotOwnerError: /^\[AntiCopy\] Du kannst nur den Schutz deiner Karten ausschalten\.$/,
		spamWarning: /^\[AntiCopy\] Du kannst diesen Befehl nur alle (\d+) Sekunden ausführen\.$/,
	},
	loreRegex: /^Ersteller der Karte: (\S+)$/,
	commands: {
		toggleProtection: '/anticopy'
	}
}
