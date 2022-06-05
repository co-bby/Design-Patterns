// A mixin is an object that we can use inorder to add
// reusable functionality to another object or class, without using inheritance.

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// This maxin will provide additional functionality to the dog without using inheritance.
const animalFunctionality = {
  walk: () => console.log('Walking'),
  sleep: () => console.log('Sleeping'),
};

const dogfunctionality = {
  __proto__: animalFunctionality, //same as using object.assign()
  bark: () => console.log('Woof!'),
  wagtail: () => console.log('Waggling my tail'),
  play: () => console.log('Playing!'),

  walk() {
    super.walk();
  },
  sleep() {
    super.sleep();
  },
};

// We can only add the  adiitional functioality to the dog Object.assign method
Object.assign(dogfunctionality, animalFunctionality);
Object.assign(Dog.prototype, dogfunctionality);

// Testing to see if the functionalities was added to the Dog class
const pet1 = new Dog('Boddie');

console.log(pet1.name);
pet1.bark(); //prints out "Wolf!"
pet1.play(); //prints out "playing"
pet1.walk(); //prints out "walking "
