const BANK_COMMAND_PREFIX = '/bank '

module.exports = {
    chatPatterns: {
        bankBalance: /^\[Bank\] Kontostand: (\d+)$/,
        bankDeposit: /^\[Bank\] Du hast 2000 auf dein Bankkonto eingezahlt\.$/,
        bankWithdrawl: /^\[Bank\] Du hast 2999 von deinem Bankkonto abgehoben\.$/,
        bankHelp: /^\[Bank\] Die Bank sichert dein Geld vor Verlust durch Serverfehler oder einem Reset\.$/,

        bankInvalidNumberError: /^\[Bank\] (.+) ist keine gültige Zahl\.$/,
        bankInsufficientAmountError: /^\[Bank\] Du hast nicht genug Guthaben oder willst einen zu geringen Betrag abheben\. Der Mindestein- und Auszahlungsbetrag liegt bei (.+)\$\.$/,
        spamWarning: /^\[Bank\] Du kannst diesen Befehl nur alle (\d+) Sekunden benutzen\.$/,
    },
    commands: {
        getBalance: BANK_COMMAND_PREFIX + 'guthaben',
        deposit: BANK_COMMAND_PREFIX + 'einzahlen $1',
        withdraw: BANK_COMMAND_PREFIX + 'abheben $1'
    }
}
