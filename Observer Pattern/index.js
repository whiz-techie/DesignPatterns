class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    notifyObservers(data) {
      this.observers.forEach((observer) => observer.update(data));
    }
  }
  
  class Observer {
    update(data) {
      console.log(`Received data: ${data}`);
    }
  }
  
  const subject = new Subject();
  const observer1 = new Observer();
  const observer2 = new Observer();
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  subject.notifyObservers('Hello There');