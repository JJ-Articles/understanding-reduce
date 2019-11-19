# Using ES6's Array.reduce() Method

If you're a junior dev like me, you may have come across an array method called reduce(). And if your resemblance to me is more than passing, you may have wondered, what the heck is this thing? "Accumulator"? What? Well, have no fear, my friend! You've come to the right place. In this article, I'll dive into  reduce() and provide several examples of how to use it.

Like JavaScript's other higher order array methods map() and filter(), reduce() iterates over an array, running a callback function during each iteration, and ultimately returning a new value. So far, so good! We all get map() and filter(). An array goes in, and a new array comes out. reduce() isn't necessarily returning a new array, but, hey, we can deal with that. 

Here's where things get a little hairy. The callbacks passed to map() and filter() work similarly in that they both take the current value, the current index, and a couple of optional parameters. In the case of map(), we can use the body of our callback to manipulate the current value and return something different. In the case of filter(), we use the callback's body to run a test. If the current value passes the test, it gets returned. If not, we move on to the next iteration. Okay. Good. Got it.

reduce() doesn't work that way. The callback we pass to reduce() takes as its first parameter something called an 'accumulator.' It then takes the familiar current value, current index, etc. 

What the heck is an accumulator? Okay. This is really cool. **The accumulator is the returned value of the previous iteration.** 

>"Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value." 
> - MDN entry for reduce()

## Find the sum of an array of numbers

Let's look at a simple example to get comfortable with how to use the accumulator. In this example, we use reduce() to find the sum of an array of numbers.

```js
[1,5,2].reduce( (a, v) => a += v * 2, 0 );
```

What's going on here? We have an array `[1,5,2]` on which we're calling `reduce()`. The callback we're passing in to reduce is `(a,v) => a += v * 2`. Breaking it down a little further, parameter `a` is our accumulator, and parameter `v` is our current value. In the body of the function, we're updating `a` on each iteration, adding it to itself plus the current value times 2. 

Notice that sneaky second parameter to reduce, right after the callback? The `0`? That's where we set the initial value of our accumulator, otherwise the accumulator takes on the first value of the array. More on that in a bit. 

Now let's step through it.

On the first pass, we set our accumulator to its initial value, which is 0, plus the current value, which is 1,  multiplied by 2. What we end up returning is 0 + (1 * 2) = 2. Great!

Entering the second pass, our accumulator now starts out with the value returned by the last pass, in this case 2. Because we've moved on to the second member of the array, the current value is now 5. What we return is 2 + (5 * 2) = 12. Got it!

Entering the third and final pass, our accumulator's value is 12. The current value is now 2. What we return is 12 + (2 * 2) = 16. 

That's it! We're done. 

Here it is in table form:

Iteration | Accumulator | Current Value | Returned Value
--- | --- | --- | ---
1 | 0 | 1 | 2
2 | 2 | 5 | 12
3 | 12 | 2 | 16

Not too bad, right? 

## Counting the only the members of an array that meet a specific criterium

Let's look at another example. **In this example we use reduce() to count how many phone numbers in an array of phone numbers begin with the number '5.'**

I'm going to walk through the solution below, but you might want to take a minute to see if you can figure out how to solve this problem.

Here's the array: 

```js
const tels = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
```

And here's the solution:

```js
tels.reduce( (a,v) => {
    if(v.charAt(1) === '5'){ a+=1 }
    return a;
}, 0);
```

There's a lot going on here. We begin by calling `reduce()` on our `tels` array. The callback we're passing in to reduce is:

```js
(a, v) => {
    if(v.charAt(1) === '5'){ a+=1 }
    return a;
}
```

Breaking it down a little further, once again parameter `a` is our accumulator, and parameter `v` is our current value. In the body of the function, we're using a conditional statement to test whether the current value's second character is `'5'`. We're using the second character, because the first character of each phone number string is a '('. If test passes, we set our accumulator to its current value plus one. Once again, in the second parameter to reduce(), we set the initial value of our accumulator to `0`. 

Now let's walk through it.

On the first pass, we begin by testing the current value. Is the second character of `"(503) 123-4567"` a `'5'`? Yes! So, we set our accumulator to its initial value, which is 0, plus 1. On the next line, we return our accumulator with its new value 0 + 1 = 1. Great!

Entering the second pass, our accumulator now starts out with the value returned by the last pass, in this case 1. Once again, we test the current value, which is now `"(646) 123-4567"`. Is the second character of `"(646) 123-4567"` a `'5'`? No. So we do not increment our accumulator.  On the next line, we return our accumulator with its unchanged value of 1. Got it!

Entering the third pass, our accumulator's value is still 1. Again, we test the current value, which is now `"(503) 987-6543"`. Is the second character of `"(503) 987-6543"` a `'5'`? Yes! So, we set our accumulator to its current value, which is 1, plus 1. On the next line, we return our accumulator with its new value 1 + 1 = 2. Cool!

At this point, I think you get the idea. When we're done iterating over our array of phone numbers, the final value that is returned is 3. Three of our phone numbers begin with a `'5'`.

Here it is in table form:

Iteration | Accumulator | Current Value | Returned Value
--- | --- | --- | ---
1 | 0 | "(503) 123-4567" | 1
2 | 1 | "(646) 123-4567" | 1
3 | 1 | "(503) 987-6543" | 2
4 | 2 | "(503) 234-5678" | 3
5 | 3 | "(212) 123-4567" | 3
6 | 3 | "(416) 123-4567" | 3

