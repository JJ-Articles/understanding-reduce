// The Array reduce method can be used with complex values, not just numbers

const users = [
    { name: 'asdf', age: 33 },
    { name: 'asldkfk', age: 99 },
    { name: 'dd', age: 88 }
];

// I've created a new usersObject, which I also pass in as the 'accumulator' in users.reduce(). The 'current value' in the reducer is the user object that I'm iterating over. In the body of the reducer, the accumulator is the usersObject at a new key called 'user.name'. We set that equal to user.age. Then we return the accumulator, that is, usersObject. We have to return the object so that it's available in the next iteration. We also pass in a new empty object literal as the initial value of the accumulator.
let usersObject = users.reduce((usersObject, user) => {
    usersObject[user.name] = user.age
    return usersObject;
}, {});

console.log(usersObject);

// A simpler example. Find the most expensive item that is under $10 and return that object.

const products = [
    { name: 'hard drive', price: 59.99 },
    { name: 'lightbulbs', price: 2.59 },
    { name: 'paper towels', price: 6.99 },
    { name: 'flatscreen monitor', price: 159.99 },
    { name: 'cable ties', price: 19.99 },
    { name: 'ballpoint pens', price: 4.49 }
];

// Result: { name: 'paper towels', price: 6.99 }
let product = products
    .filter( item => item.price < 10.01 )
    .reduce( (obj, product) => {
        if(obj.price > product.price){
            return obj
        }
    },0);

console.log(obj);
