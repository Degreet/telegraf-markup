const { Markup, Extra } = require('telegraf')

module.exports = {
	button: {
		callback: (text, action) => Markup.callbackButton(text, action),
		url: (text, url) => Markup.urlButton(text, url),
		switchToChat: (text, value) => Markup.switchToChatButton(text, value),
	},

	keyboard: {
		reply: (btns) => Markup.keyboard(btns).oneTime().resize().extra(),
		inline: (btns) => Extra.markup(Markup.inlineKeyboard(btns)),
		none: () => Extra.markup(Markup.removeKeyboard()),
	},
}
