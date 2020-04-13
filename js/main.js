const model = new NumberModel();

const eObserv1 = new ElementObserver('elementOnserver1');
const consoleObserv = new Console();
const historyObserv = new HistoryObserver();

model.addObserver(eObserv1);
model.addObserver(consoleObserv);
model.addObserver(historyObserv);
