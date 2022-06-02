const person = {
  name: 'John Doe',
  age: 21,
  nationality: 'Ghanaian',
};
// instead of interacting with the Person object directly
// we will interact with the proxy object

// The second argument in this object  represents the handler
const personProxy = new Proxy(person, {
  // it will get invoked when trying to acces the person object property
  get:(obj,prop){

   if (!obj[prop]){
	  console.log('The property does not exist on the traget object')
  }else{
	  console.log(`The value of ${prop} is ${obj[prop]}`)
  }
  },
  
  // it gets invoked when trying to modify the person object property
  set: (obj, prop, value) => {
	// A proxy can be used as validation Eg. A user cannot change
	//  person age to a string value or give an empty name.
	if(prop==="age" && typeof value !== "number"){
		console.log(`sorry ,you can only pass numeric values for age.`)
	}
	else if (prop == "name" && value.length < 2){
		console.log(`you need to provide a valid name`);
	}
	else{
    console.log(`Changed ${prop} from ${obj[obj]} to ${value}`);
	
    obj[prop] = value;
	}
  },
});

// get will get invoked
personProxy.name;

// set will get invoked
personProxy.age = 41;
