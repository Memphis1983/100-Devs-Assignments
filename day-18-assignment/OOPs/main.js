/* 
* OOP is a programming paradigm centered around objects rather than functions. Unlike the new tools and frameworks that come and go 
*OOP is still very relevant today and that's because its not a programming language or tool. It's a very propular
*style of programming. An essential key skill for every developer

* 4 Pillars of OOP
    *1 Encapsulation (Reduce Complexity + increase reusability) - In OOP we group related variables and functions that operate on them into 
        *objects and this is what we call Encapsulation 
        *Example: In procedural programming we have the variables and functions placed/grouped separately like 
Procedural Prograaming:
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overTime * rate);
}

OOP programming:
let employee = {
    baseSalary = 30_000,
    overtime = 10,
    rate = 20,
    *the function below doesnt have any parameters like procedural programming because all of its parameters are modelled 
    *as properties of this object, they are part of one unit. "The best functions are those that has no parameters!"
    *the fewwer the parameters the easier it is to maintain that function - so that's encapsulation
    getWage = function() {              
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();
    *2 Abstraction (Reduce Complexity + isolate impact of changes)
*We can hide some of the properties and methods from the outside this gives us some benefits: 
    *simple interface
    *reduce the impact of change

    *3 Inheritance (Eliminate redundant code)
*Its a mechanism allows us to eliminate redundant code, it allows us to inherit the properties and methods.


    *4 Polymorphism (Refactor ugly switch/case statements)
* Poly - means "many" and Morph - means "Form", ManyForms, It is a technique that allows us to get rid of long if/else and swith/case statements
*Example: element.render to render a bunch of elements on the html

*In OOP we combine a group of related variables and functions into a unit, we call that unit an object
*We refer to these variables as properties
*And the functions as methods
* Example: Car is an object and its properties are => make, model, color and methods like => start(), stop() and move()

*----------------------
*Topics
*----------------------
*Creating objects
*Factories and Constructors
*Primitives and Refernce Types
*Working with properties
*Private Properties
*Getters and setters

*Object Literal
*/

// * This is literal way of creating an object with properties and methods,
// * We run into issues and bugs if this had methods and if had to change it in mutliple places
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };
// circle.draw();

// *An object is a collection of key:value pairs, and all the keys are refered to as properties
// *But technically in OOP properties and methods are fundamentally different cuz a property is used to
// *to hold values, a function or method is used to define logic. Now that we have an object
// * we can access its members using the dot notation
// *We have two ways to create an object, We can use the FACTORY FUNCTION or a CONSTRUCTOR FUNCTION,
// *there's nothing special about this they are both regular functions in javaScript

// *This is called a factory function, we can simply call this function to create a new circle

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }
// const circle = createCircle(1);

//  * Constructor Function
// function Circle(raidus) {
//   this.radius = radius;      // .this is a reference to the object that is executing this piece of code
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// const another = new Circle(1);

// * Constructor Property
// *every object has a constructor property and that references the function that was used to create that object
//  Examples:
let x = new Object();
new String(); // '', "". ``
new Number(); // 1, 2, 3, 4, 5 ...
new Boolean(); // true or false

//* Functions are objects

// * Value Types => Number, Boolean, String, Symbol, undefined, null
// * Reference Types => Object, Function, Array
// * In JavaScript we have primitives and objects
// *  primitives and objects behave differently,
// * primitives hold their values independently meaning if two variables pointed to same value and one of them is changed, the other still holds the old value
let x = 10;
let y = x;
x = 20;
// * the takeaway from the above example is, the value of y still remains 10 in its own memory location
// * Since object are refence types, when x and y used as objects, both x and y are pointing to the same object in memory and when we modify that object its changes are immediately visible to the other variable
// * Primitives are copied by their values
// * Objects are copied by their reference

// *Adding and removing Properties
// We can use bracket or dot notation to access property and its values, add or remove

// * So REMEMBER,
// * --- 1. to enumerate all the members in an object we can use a for-in loop
// *Enumerating  - sometimes we need to iterate over or enumerate the properties in an object, we can do that using the for-in loop

for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]); //* if we wana get the value of this "key" we use the bracket notation
}
// * --- 2. to get all the keys in an object, use Object.keys()
// * There is another method to get all the keys in an object:
const keys = Object.keys(circle);
console.log(keys);
// * with this above approach we can separate properties from methods

// * --- 3. To check existence of a property or a method in an object use the "in" operator
// * Sometimes we wanna know if a object has as given property for that we use the "in" operator
if ("radius" in circle) console.log("circle has a radius");

//*Abstraction - Hide the details and show the essentials
function Circle(raidus) {
  this.radius = radius; // .this is a reference to the object that is executing this piece of code
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function () {
    //... some code
  };
  this.draw = function () {
    this.computeOptimumLocation();
    console.log("draw");
  };
}
const circle = new Circle(10);
circle.defaultLocation = false;

// * Private properties and methods
// * In simple terms its important to keep the complex implementation details of an object or its method inaccessible outside
// * A user only needs to understand how to use the basic interface, so instead of using .this method on all the members or properties
// * of an object, its best to declare them as local variables within the object scope so they arent visible or accessible outside to
// * users because now they are private members of the object

// *example:
function Circle(raidus) {
  this.radius = radius;
  //* this is not accessible outside the scope
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function () {
    //* this is not accessible outside the scope
    //... some code
  };
}

// * Getters and Setters
// * Take away is, use Object.defineProperty to define getters and/or setters

function Circle(raidus) {
  this.radius = radius;
  //* this is not accessible outside the scope
  let defaultLocation = { x: 0, y: 0 };
  //* this is not accessible outside the scope
  let computeOptimumLocation = function () {
    //... some code
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function () {
      if (!value.x || !value.y) {
        throw new Error("Invalid Location.");
      }
      defaultLocation = value;
    },
  });
}
// * Exercise: *Construcor function
const sw = new stopWatch();
function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;
  this.start = function () {
    if (running) throw new Error("Stopwatch has already started");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started");

    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 100;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = null;
    duration = 0;
  };
  //* read only property
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
