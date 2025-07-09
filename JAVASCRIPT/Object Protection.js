// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)
Using const
The most common way to protect an object from being changed is by using the const keyword.

With const you can not re-assign the object, but you can still change the value of a property, delete a property or create a new property.

JavaScript Object.preventExtensions()
The Object.preventExtensions() method prevents adding properties to an object.

Example
// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person);

// This will throw an error
person.nationality = "English";