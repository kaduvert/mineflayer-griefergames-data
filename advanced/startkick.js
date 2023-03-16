module.exports = {
    startkickStart: /^\[StartKick\] Soll der Spieler (\S+) rausgeworfen werden\? \/ja \/nein$/,
    startkickEnd: /^\[StartKick\] Stimme für oder gegen den Rauswurf von (\S+) ab:$/,
    startkickCountdown: /^\[GrieferGames\] Die Abstimmung, den Spieler (\S+) zu bestrafen, endet in (\d+) Sekunden!$/,
    startkickVoting: /^\[GrieferGames\] Die Abstimmung, ging (\d+) zu (\d+) aus!$/,
    startkickResult: /^\[GrieferGames\] (\S+) wurde nicht bestraft$/,
}
