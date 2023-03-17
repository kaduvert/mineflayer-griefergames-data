module.exports = {
    chatPatterns: {
        plotInfoStart: /^-+ Grundstücksinfo -+$/,
        plotInfoEnd: /^-+ GrieferGames -+$/,
        plotTeleport: /^\[GrieferGames\] Du wurdest zum Grundstück teleportiert\.$/,
        plotFlagAdded: /^\[GrieferGames\] Die Flag wurde erfolgreich hinzugefügt$/, // source for error if . is added at the end
        plotGreeting: /^\[GrieferGames\] \[(-?\d+;-?\d+)\] .*$/,
        plotChatActivated: /^\[GrieferGames\] Die Einstellung chat wurde aktiviert\.$/, // merge?
        plotChatDeactivated: /^\[GrieferGames\] Die Einstellung chat wurde deaktiviert\.$/,
        plotChatMessage: /^\[Plot-Chat\]\[(-?\d+;-?\d+)\] \S+ ┃ (\S+) : (.*)$/,
        plotPlayerEntered: /^\[GrieferGames\] \[(-?\d+;-?\d+)\] ([^ ]+) betrat dein Grundstück\.$/,
        plotPlayerLeft: /^\[GrieferGames\] \[(-?\d+;-?\d+)\] ([^ ]+) verließ dein Grundstück\.$/,

        plotFlagMustBeSetError: /^\[GrieferGames\] Die Flag (\S+) muss gesetzt sein, damit du diese Aktion ausführen kannst\.$/,
        plotMissingPermission: /^\[GrieferGames\] Dir fehlt die Berechtigung (\S+)\.$/,
        plotUnclaimedError: /^\[GrieferGames\] Das Grundstück (-?\d+;-?\d+) hat bisher keinen Besitzer\.$/,
        plotOwnerPermissionError: /^\[GrieferGames\] Diese Aktion kann nur der Besitzer des Grundstücks ausführen\.$/,
        plotSethomeError: /^\[GrieferGames\] Du musst auf dem Grundstück vertraut sein, um den Spawn-Punkt des Grundstücks zu versetzen\.$/,
        plotNotFoundError: /^\[GrieferGames\] Dein Suchmuster ergab keine Treffer\.$/,
    }
}