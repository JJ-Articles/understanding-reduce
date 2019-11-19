# Using ES6's Array.reduce() Method

If you're a junior dev like me, you may have come across an array method called reduce(). And if your resemblance to me is more than passing, you may have wondered, what the heck is this thing? "Accumulator"? What? Well, have no fear, my friend! You've come to the right place. In this article, I'll dive into  reduce() and provide several examples of how to use it.

Like JavaScript's other higher order array methods map() and filter(), reduce() iterates over an array, running a callback function during each iteration, and ultimately returning a new value. So far, so good! We all get map() and filter(). An array goes in, and a new array comes out. reduce() isn't necessarily returning a new array, but, hey, we can deal with that. 

Here's where things get a little hairy. The callbacks passed to map() and filter() work similarly in that they both take the current value, the current index, and a couple of optional parameters. In the case of map(), we can use the body of our callback to manipulate the current value and return something a little (or a lot) different. In the case of filter(), we use the callback's body to run a test. If the current value passes the test, it gets returned. If not, we move on. Okay. Good. Got it.

reduce() doesn't work that way. The callback we pass to reduce() takes as its first parameter something called an 'accumulator.' It then takes the familiar current value, the current index, and an optional parameter that we don't have to worry about right now. 

What the heck is an accumulator? Okay. This is really cool. The accumulator is the returned value of the previous iteration. 

>"Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value." 
> - MDN entry for reduce()

Let's look at an example. 

```js
[1,5,2].reduce( (a, v) => a += v * 2, 0 );
```

What's going on here? We have an array `[1,5,2]` on which we're calling `reduce()`. The callback we're passing in to reduce is `(a,v) => a += v * 2`. Breaking it down a little further, parameter `a` is our accumulator, and parameter `v` is our current value. In the body of the function, we're updating `a` on each iteration, adding it to itself plus the current value times 2. 

Notice that sneaky second parameter to reduce, right after the callback? The `0`? That's where we set the initial value of our accumulator, otherwise the accumulator takes on the first value of the array. More on that in a bit. 

Now let's step through it.

On the first pass, we set our accumulator to its initial value, which is 0, plus the current value, which is 1,  multiplied by 2. What we end up returning is 0 + (1 * 2) = 2. Great!

Entering the second pass, our accumulator now starts out with the value returned by the last pass, in this case 2. Because we've moved on to the second member of the array, the current value is now 5. What we return is 2 + (5 * 2) = 12. Got it!

Entering the third and final pass, our accumulator now starts out as 12. The current value is now 2. What we return is 12 + (2 * 2) = 16. 

That's it! We're done. 

Here it is in table form:

Iteration | Accumulator | Current Value | Returned Value
--- | --- | --- | ---
1 | 0 | 1 | 2
2 | 2 | 5 | 12
3 | 12 | 2 | 16

//Here's an example that took me like 30 minutes to solve. We're asked to count how many phone numbers that begin with '5' are in the phoneNumbers array, and we have to use reduce to figure that out.

//So, we're going to set up numberOf503 so that it stores whatever gets returned by phoneNumbers.reduce(). For the reducer, we have the accumulator and the current value getting passed in. Then we check to see if the current value begin with the number 5. If it does, we increment the accumulator by 1. Then we return the accumulator. As reduce() iterates over the phone numbers in our original array, every time it encounters one that begins with '5' it adds 1 to the accumulator and sort of passes the accumulator off to the next iteration.


const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];

let numberOf503 = phoneNumbers
    .reduce( (acc,curr) => {
        if(curr.charAt(1) === '5'){ 
            acc++;
        }
        return acc;
    }, 0);

console.log(numberOf503)
