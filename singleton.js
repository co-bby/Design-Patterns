let counter = 0;

// This variable is created outside because
//  we want to have only one instance
let instance;

class Counter {
  if(instance) {
    throw new Error('You can only create one instance at a time!');
  }
  getInstance() {
    return this;
  }

  //   returns the current value of the counter variable
  getCount() {
    return counter;
  }

  //   increases the value of the counter variable by 1
  increment() {
    return counter++;
  }

  //   decreases the value of the counter variable by 1
  decrement() {
    return --counter;
  }
}

// We use object.freeze before exporting because it makes sure the consuming
// code cannot modify the singleton
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
