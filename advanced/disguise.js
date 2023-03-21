module.exports = {
	chatPatterns: {
		as: /^Du bist nun als (\S+) verkleidet\.$/,
		removed: /^Du hast deine Verkleidung entfernt\.$/,

		status: /^Du bist als bat verkleidet\.$/,
		notFound: /^Du bist nicht verkleidet.$/,

		// (bat; visibility=everyone; visibility-param=; custom-name=; custom-name-visible)
		// bot.chatAddPattern(/^\((\S+); visibility=everyone; visibility-param=; custom-name=; custom-name-visible\)$/, 'disguiseStatusRaw')

		unknownArgumentsError: /^Falsche Benutzung: (.+) sind unbekannte Argumente\.$/,
		insufficientPermissionsError: /^Du darfst das nicht tun\.$/,
		pluginForbidsActionError: /^Ein anderes Plugin verbietet es dir, diese Aktion auszuführen\.$/,
	},
	commands: {
		as: '/d $1',
		remove: '/ud',
		getStatus: '/d status'
	}
}
