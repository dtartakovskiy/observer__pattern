class NumberModel {
	constructor() {
		this.number = 0;
		this.color = 'red';
		this.observers = [];
	}

	addObserver(o) {
		this.observers = [...this.observers, o];
	}

	notifyObservers() {
		for (let o of this.observers) {
			o.update(this);
		}
	}

	increment() {
		const colors = ['orange', 'blue', 'red', 'brown', 'green'];
		this.number++;
		this.color = colors[Math.floor(Math.random() * colors.length)];
		this.notifyObservers();
	}
}
