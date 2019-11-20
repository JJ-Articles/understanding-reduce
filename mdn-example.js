// Here's a cool example of one of the complex ways that you can use reduce. Say you have an array of objects and you want to rearrange it so that you end up with an object with properties where the value of each property is an array of the objects from the original array that have that particular property. For example, you have an array of person objects where each object has a name and age like this:

const people = [
  { name: "Samuel", age: 45 },
  { name: "Eleanor", age: 26 },
  { name: "Marguerite", age: 26 },
  { name: "Ako", age: 18 }
];

//and you want to rearrange it so that you end up like this:

const peopleRearranged = {
  18: [{ name: "Pysh", age: 18 }],
  26: [
    { name: "Glarp", age: 26 },
    { name: "Smooz", age: 26 }
  ],
  45: [{ name: "Jerp", age: 45 }]
};

//You can do that with this:

function groupBy(objectArray, property) {
  return objectArray.reduce(function(acc, obj) {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

//How cool is that!!!! Let's walk through it:

//You're passing in your array of objects as objectArray and your property as property (in our case it's going to be 'age')

//Then you're running reduce() on the array.

//On each iteration, which is the same as saying at each object in the array, you're getting the property in the object that you're interested in with obj[property] and you're storing it in key

//Then, if our accumulator object doesn't yet have that property in it, we create both the property and its starting value with acc[key] = []

//Next, we push our current object into our new array with acc[key].push(obj)

//Next, we return the accumulator with return acc  so that our accumulator is ready for the next iteration

//That's the end of the callback function that we're using  in our reduce(), but there's another parameter that reduce() needs. It's the initial value of our accumulator. Up in step 4, I mentioned our accumulator object. But why is the accumulator an object? Because we pass an empty object into reduce() as its second parameter.
