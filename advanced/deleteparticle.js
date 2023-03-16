module.exports = {
	regex: {
		deleteParticleListItem: /^ (\d+)\.\) Typ: (.+) - X: 12707\.\d+ Y: 67\.\d+ Z: 8416\.\d+$/, // deleteparticle
		deleteParticleChoose: /^\[GrieferGames\] Wähle einen Partikel-Effekt aus, welchen du löschen möchtest\.$/,

		deleteParticleConfirmRequest: /^\[GrieferGames\] Bestätige bitte mit \/deleteparticle confirm. Du hast (\d+) Sekunden Zeit\.$/, // deleteparticle (index)
		deleteParticleConfirmed: /^\[GrieferGames\] Der Partikel-Block \(Typ: (.+)\) wurde an Position X: ([-\d]+)\.\d+ Y: (\d+)\.\d+ Z: ([-\d]+)\.\d+ gelöscht\.$/, // deleteparticle confirm

		deleteParticleNotOnPlotError: /^\[GrieferGames\] Du musst dich auf einem Grundstück befinden\.$/,
		deleteParticleNotFoundError: /^\[GrieferGames\] In deiner Nähe befindet sich kein Partikel-Block\.$/, // deleteparticle
		deleteParticleNotFoundError: /^\[GrieferGames\] Du hast keinen Partikel-Block, der gelöscht werden soll\.$/, // deleteparticle confirm
	}
}
