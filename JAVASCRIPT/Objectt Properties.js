// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)
JavaScript Object.defineProperty()
The Object.defineProperty() method can be used to:

Adding a new property to an object
Changing property values
Changing property metadata
Changing object getters and setters
Syntax:

Object.defineProperty(object, property, descriptor)
Adding a new Property
This example adds a new property to an object:

Example
// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Add a Property
Object.defineProperty(person, "year", {value:"2008"});