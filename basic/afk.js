module.exports = {
    windowPatterns: {
        challange: /^Bist du AFK\?$/
    },
    itemPatterns: {
        solveChallange: /^Ich bin nicht AFK!$/
    },
    chatPatterns: {
        challangeSolved: /^Du wurdest als AFK erkannt und bist rechtzeitig zurückgekehrt\. Bewege dich mehr, um die Erkennung aufzuheben\.$/
    },
    windowActions: {
        challange: {
            itemToClick: solveChallange,
            successEvents: ['chat:challangeSolved', 'windowClose'],
        }
    }
}
