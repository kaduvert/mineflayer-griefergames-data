module.exports = {
    chatPatterns: {
        boundMoneydrop: /^\S+ ┃ (\S+) hat eine Kiste geöffnet und \S+ ┃ (\S+) hat ([\d,\.]+) Dollar erhalten!$/,
        unboundMoneydrop: /^\S+ ┃ (\S+) hat eine Kiste geöffnet und für jeden ([\d,\.]+) Dollar gewonnen!$/,
        u: /^\[CaseOpening\] Du hast leider keine Kisten übrig. Kisten kannst du mit Kristallen kaufen. Erhalte Kristalle in unserem Webshop!$/,
        u2: /^\[CaseOpening\] Du hast EXP_BOTTLE gewonnen!$/,
    }
}

