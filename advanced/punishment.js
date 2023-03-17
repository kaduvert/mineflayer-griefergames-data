module.exports = {
    chatPatterns: {
        startKick: [
            /^\[StartKick\] Soll der Spieler (\S+) rausgeworfen werden\? \/ja \/nein$/,
            /^\[StartKick\] Ersteller: (\S+)$/,
            /^\[StartKick\] Dauer: (\d+) Sekunden$/,
            /^\[StartKick\] Begründung: (.*)$/,
            /^\[StartKick\] Stimme für oder gegen den Rauswurf von (\S+) ab:$/,
            /^\[GrieferGames\] +\[Dafür\] - \[Dagegen\]$/
        ],
        startJail: [
            /^\[StartJail\] Achtung - StartJail-Abstimmung$/,
            /^\[StartJail\] Soll der Spieler (\S+) eingesperrt werden\? \/ja \/nein$/,
            /^\[StartJail\] Ersteller: (\S+)$/,
            /^\[StartJail\] Dauer: (\d+) Sekunden$/,
            /^\[StartJail\] Begründung: (.*)$/,
            /^\[StartJail\] Stimme für oder gegen die Bestrafung von (\S+) ab:$/,
            /^\[GrieferGames\] +\[Dafür\] - \[Dagegen\]$/
        ],
        punishmentCountdown: /^\[GrieferGames\] Die Abstimmung, den Spieler (\S+) zu bestrafen, endet in (\d+) Sekunden!$/,
        punishmentResult: [
            /^\[GrieferGames\] Die Abstimmung, ging (\d+) zu (\d+) aus!$/,
            /^\[GrieferGames\] (\S+) wurde (?:nicht) bestraft!?$/
        ]
    }
}
/*

[StartJail] Achtung - StartJail-Abstimmung
[StartJail] Soll der Spieler Spieler1 eingesperrt werden? /ja /nein
[StartJail] Ersteller: Spieler0
[StartJail] Dauer: 30 Sekunden
[StartJail] Begründung: scammer 
[StartJail] Stimme für oder gegen die Bestrafung von Spieler1 ab:
[GrieferGames]  [Dafür] - [Dagegen]

[GrieferGames] Die Abstimmung, den Spieler Spieler1 zu bestrafen, endet in 3 Sekunden!
[GrieferGames] Die Abstimmung, den Spieler Spieler1 zu bestrafen, endet in 2 Sekunden!
[GrieferGames] Die Abstimmung, den Spieler Spieler1 zu bestrafen, endet in 1 Sekunden!
Spieler1, Spieler2.
Spieler3.
[GrieferGames] Die Abstimmung Spieler1 ging 22 zu 1 aus!
[GrieferGames] Spieler1 wurde bestraft!
*/