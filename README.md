# Using ES6's Array.reduce() Method

In this article, we'll take a close look at reduce() and some of the ways it can be used to more quickly and easily accomplish tasks that would otherwise require a more verbose approach.

Before reading on, make sure you have a good grasp of forEach(), map(), and filter().

To ease into things, let's start by noting a couple of similarities and differences between reduce() and the more familiar map() and filter() methods. 
- Similarity: All three of these methods iterate over an array and return a new value. 
- Difference: map() and filter() return a new array, whereas reduce() can return any data type. 
- Similarity: All three methods take a callback function as their first argument. 
- Difference: For map() and filter() that callback takes the current value and the current index as its first and second arguments, whereas reduce() takes an additional argument before the current value and current index.

That additional argument to reduce() is called the 'accumulator,' and it's what gives reduce() its incredible flexibility. **The accumulator is the value returned by the callback function at the end of the previous iteration.** This is a difficult concept to wrap your head around at first. 

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

I'm going to walk through the solution below, but you might want to take a minute to see if you can figure out how to solve this problem. Here's a hint: you have to return the accumulator every iteration, so that it's available for the next iteration, but you don't have to change the accumulator's value on every iteration. 

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

## But wait! There's more!

In the two examples that we've looked at thus far, we've returned a number. But here's a really cool thing about reduce() - we can return any single value, whether it's a number, boolean, string, array, or object. 

Let's look at an example in which we return an object. Here's the problem (by the way, this is adapted from MDN's entry on reduce()): **you have an array of person objects, each of which has a `name` property and an `age` property. But what you need is an object in which people are grouped by their ages. Each unique age will be a property and its value will be an array containing the people who are that age.**

 Wow! Stop for a moment and see if you can think your way through this. Here are a couple of hints: (1) Remember that second parameter to reduce()? The one that in our first two examples we set to `0`? You can set that to whatever you want. (2) In our first two examples we updated our accumulator by adding something to it. But we can update the accumulator in all sorts of ways that are appropriate to what we want it to return.

 Here's the array:

```js
const people = [
     {name: 'Dev', age: 45},
     {name: 'Eleanor', age: 26},
     {name: 'Marguerite', age: 26},
     {name: 'Ako', age: 18},
]
```

Here's what you want to return from reduce():

```js
{
     18: [
           {name: 'Ako', age: 18},
         ],
     26: [
           {name: 'Eleanor', age: 26},
           {name: 'Marguerite', age: 26}
         ],
     45: [
           {name: 'Dev', age: 45}
         ]
}
```

And here is the solution:

```js
people.reduce((a, v) => {
    const key = v['age'];
    if (!a[key]) { a[key] = [] }
    a[key].push(v);
    return a;
  }, {});
```

How cool is that?! That's pretty darn cool, right?

There's a lot going on here. We begin by calling `reduce()` on our `people` array. The callback we're passing in to reduce is more complicated than ones we've seen previously:

```js
(a, v) => {
    const key = v['age'];
    if (!a[key]) { a[key] = [] }
    a[key].push(v);
    return a;
  }
```

Breaking it down a little further, once again parameter `a` is our accumulator, and parameter `v` is our current value. 

In the body of the function, we're setting a new variable called `key` to the current value at `age`. Remember that the current value in this case is the current person object. So, `v['age']` might be 18, or 26, or 45. 

Next we use a conditional statement to test whether our accumulator object has a value at `key`. This is confusing. In our previous examples, the accumulator was a number. In this problem, we've set our accumulator's initial value to an empty object. You can see that in the second parameter to reduce. 

If our accumulator does not have a value at `key`, then we create one. Specifically, we set `a[key]` to `[]`. 

Next, we push the current person object into the array that we created for it with `a[key].push(v)`. 

Finally, we return our accumulator, so that it's available to the next iteration. 

Now let's walk through it.

On the first pass, we begin by setting `key` to the current person object's `age`. In this case that's `45`, because Dev is the first person in our array of people. 

Next, if there isn't already a value in our accumulator object's `key` property, then we set that property to an array literal. This is a little tricky. Not only is there no value at `a[key]`, there's no `key` property in `a` at all! No problem! When the line `a[key] = []` is run, JavaScript creates both the property and it's value. Thanks, JavaScript. You're a mensch.

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

//!NOTE: THE LESSON HERE IS THAT YOU HAVE TO RETURN A VALUE FROM REDUCE, BUT YOUR DON'T HAVE TO RETURN THE ACCUMULATOR. ANY VALUE THAT YOU RETURN WILL BE THE ACCUMULATOR ON THE NEXT ITERATION.