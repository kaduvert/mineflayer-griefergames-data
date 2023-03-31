const COMMAND_PREFIX = '/bank '

module.exports = {
    chatPatterns: {
        balance: /^\[Bank\] Kontostand: (\d+)$/,
        depositSuccess: /^\[Bank\] Du hast (\d+) auf dein Bankkonto eingezahlt\.$/,
        withdrawSuccess: /^\[Bank\] Du hast (\d+) von deinem Bankkonto abgehoben\.$/,
        help: /^\[Bank\] Die Bank sichert dein Geld vor Verlust durch Serverfehler oder einem Reset\.$/,

        invalidNumberError: /^\[Bank\] (.+) ist keine gültige Zahl\.$/,
        insufficientAmountError: /^\[Bank\] Du hast nicht genug Guthaben oder willst einen zu geringen Betrag abheben\. Der Mindestein- und Auszahlungsbetrag liegt bei (.+)\$\.$/,
        spamWarning: /^\[Bank\] Du kannst diesen Befehl nur alle (\d+) Sekunden benutzen\.$/,
    },
    commands: {
        getBalance: COMMAND_PREFIX + 'guthaben',
        deposit: COMMAND_PREFIX + 'einzahlen $1',
        withdraw: COMMAND_PREFIX + 'abheben $1'
    }
}
