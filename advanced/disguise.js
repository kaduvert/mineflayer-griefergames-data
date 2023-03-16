module.exports = {
	regex: {
		disguised: /^Du bist nun als (\S+) verkleidet\.$/,
		disguiseRemoved: /^Du hast deine Verkleidung entfernt\.$/,

		disguiseStatus: /^Du bist als bat verkleidet\.$/,
		disguiseNotFound: /^Du bist nicht verkleidet.$/,

		// (bat; visibility=everyone; visibility-param=; custom-name=; custom-name-visible)
		// bot.chatAddPattern(/^\((\S+); visibility=everyone; visibility-param=; custom-name=; custom-name-visible\)$/, 'disguiseStatusRaw')

		disguiseUnknownArgumentsError: /^Falsche Benutzung: (.+) sind unbekannte Argumente\.$/,
		disguiseInsufficientPermissionsError: /^Du darfst das nicht tun\.$/,
		disguisePluginForbidsActionError: /^Ein anderes Plugin verbietet es dir, diese Aktion auszuführen\.$/,
	}
}