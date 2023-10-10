class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  someMethod() {
    print('helloworld');
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2)

//The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.
 
