module.exports = {
	chatPatterns: {
		mapInfoStart: /^Information für die Karte (\S+):$/,
		mapInfoEnd: /^First 20 bytes: .+$/,
		mapInfoNoDataError: /^Die Karte enthält keine Daten!$/,
	},
	multiLineRegex: /^Minecraft Server ID: (.*)\nDynamische ID: (\d+)\nServer: (.+)\nWorld: (\S+)\nErsteller: (\S+)\nErstellt: (.+)\nBreite: (\d+)px\nHöhe: (\d+)px\nSkalierung: (\d+)\nUrsprüngliche ID: (.+)\nData Size: (\d+)bytes\nFirst (\d+) bytes: \[([A-Fa-f\d]+)\]$/s,
	commands: {
		get: '/mapinfo'
	}
}
