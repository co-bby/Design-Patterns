const person = {
  name: 'John Doe',
  age: 21,
  nationality: 'Ghanaian',
};

// instead of interacting with the Person object directly
// we will interact with the proxy object

// The second argument is the object that represents the handler
const personProxy = new Proxy(person, {
  // it will get invoked when trying to acces the person object property
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },

  // it gets invoked when trying to modify the person object property
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[obj]} to ${value}`);
    obj[prop] = value;
  },
});
