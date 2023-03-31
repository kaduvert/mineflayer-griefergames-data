// const EventEmitter = require('./events')

module.exports = function inject(bot, options) {
    bot.chatAddPattern(/^$GG Du hast \S+ ┃ (\S+) den Premium Rang aktiviert\.$/, 'premiumActivated')
    bot.chatAddPattern(/^$GG Du kannst erst am (.+) wieder den Premium-Rang vergeben\.$/, 'premiumCooldownError')

    // bot. = {}


}
