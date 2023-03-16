module.exports = {
	regex: {
		loadedData: /^\[Switcher\] Daten heruntergeladen\!$/,
		serverFull: /^Der Server ist voll\. \[\d+\/\d+\]$/,
		switchFailed: /^Kicked whilst connecting to ([a-zA-Z0-9\-_]+): (.+)$/,
		switchSucceeded: /^\[GrieferGames\] Du wurdest automatisch auf ([a-zA-Z0-9\-_]+) verbunden\.$/,

		switchTimeout: /^Du kannst erst am ([\d\.]+ um [\d:]+) wieder beitreten\./,
		portalWarning: /^\[GrieferGames\] Bitte warte 12 Sekunden zwischen jedem Teleport\.$/,
		lobbyConnectionAttempt: /^Versuche auf die Lobby zu verbinden\.$/,
		portalRoomConnectionAttempt: /^Versuche in den Portalraum zu verbinden\.$/,
	}
}
