module.exports = {
    chatreset: /^\[Chat\] Der Chat wurde von \S+ ┃ \S+ auf normal gestellt\.$/,
	slowchat: /^\[Chat\] Der Chat wurde von \S+ ┃ \S+ verlangsamt\.$/,
	slowchatWarn: /^\[GrieferGames\] Du kannst nur jede 10 Sekunden schreiben\.$/,

	spamWarning: /^\[\S+\] Du kannst diesen Befehl erst nach (\d+) Sekunden benutzen\.$/,
	spamWarning: /^\[\S+\] Du musst (\d+) Sekunden warten, bevor du diesen Befehl erneut ausführen kannst\.$/,
	spamWarning: /^\[\S+\] Du kannst diesen Befehl nur alle (\d+) Sekunden benutzen\.$/,
	spamWarning: /^\[GrieferGames\] Bitte warte kurz\.$/,
	spamWarning: /^Bitte unterlasse das Spammen von Commands\!$/,
	spamWarning: /^\[Switcher\] Daten werden noch heruntergeladen\. Bitte warte \.\.\.$/,

	playerChatMessage: /^(?:\[.+\] )?(\S+) ┃ (\S+) » (.*)$/,
	broadcast: /^\[Rundruf\] (.*)$/,

	blacklistError: /^\S+ \| \S+ : (.*)/,
	unknownCommandError: /^Unknown command\. Type "\/help" for help\.$/,
	insufficientPermissionsError: /^I'm sorry, but you do not have permission to perform this command\. Please contact the server administrators if you believe that this is in error\.$/,
	insufficientPermissionsError: /^Unzureichende Rechte\.$/,
}