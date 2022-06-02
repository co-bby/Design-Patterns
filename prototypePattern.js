// With Prototype pattern we can share the properties of Dog to many objects of the same type
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}
// all properties that are defined on the class itself, bark in this case, are automatically added to
//the prototype
console.log(Dog.prototype);

// We can add properties to the prototype since all instances have access to the
// prototype
Dog.prototype.play = () => console.log('playing now!');

// SuperDog inherit properties from Dog
class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log('flying');
  }
}

const dog1 = new SuperDog('Boddie');
// The value of this __proto__ on any instance of the constructor is
// a direct reference to the constructor's prototype!
console.log(dog1.__proto__);

dog1.bark();

dog1.fly();

// object.create method let us create new object to
//which we can pass the value of its prototype

const friend = {
  age(myAge) {
    console.log(`I am ${myAge} years old`);
  },
};

const Heather = Object.create(friend);
Heather.age(21);
