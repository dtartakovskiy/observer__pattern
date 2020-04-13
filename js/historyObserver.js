class HistoryObserver {
	constructor() {
		this.colorHistory = [];
	}

	update(model) {
		this.colorHistory = [model.color[0].toUpperCase(), ...this.colorHistory];

		let msg = 'The most 5 recent colors are: ';

		for (let i = 0; i < 5; i++) {
			if (this.colorHistory[i]) {
				msg += this.colorHistory[i] + ' ';
			}
		}

		console.log(msg);
	}
}
