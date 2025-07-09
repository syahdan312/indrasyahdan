The JavaScript apply() Method
The apply() method is similar to the call() method (previous chapter).

In this example the fullName method of person is applied on person1:

Example
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);