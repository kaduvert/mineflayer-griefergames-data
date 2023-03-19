module.exports = {
    chatPatterns: {
        boosterHeader: /^Folgende Booster sind auf diesem Server aktiv:$/,
        boosterStatus: /^(\S+)-Booster: (.+)$/,
        boosterActivated: /^\[Booster\] \S+ ┃ (\S+) hat für die GrieferGames Community den (\S+)-Booster für (\d+) Minuten aktiviert\.$/,
        boosterFlyExpiredWarning: /^\[Booster\] Der Fly-Booster ist beendet\. Dein Flugmodus wird deaktiviert\.\.\.$/,
        boosterDeactivated: /^\[Booster\] Der (\S+)-Booster ist jetzt wieder deaktiviert\.$/,
        boosterBreakEffectRemoved: /^\[GrieferGames\] Der Fast-Break-Effekt wurde entfernt\.$/,
    }
}

// [GrieferGames] Du hast nun wieder den Fast - Break - Effekt.