//So, I've learned about the Array objects reduce() method before, but I've never really used it. The examples that the instructor gives in the arrays videos are much more helpful than any I've seen before.

//Like map and filter, reduce() takes a callback function. It also has a second optional parameter. More on that in a sec. The callback for reduce() is referred to as the reducer. In map() and filter() the parameters for the callback function are pretty straightforward. map() and filter()'s callbacks both take the current value, the current index, and a couple of optional parameters. reduce() is more complicated. At least it seems that way to me. The reducer takes an 'accumulator,' the current value, and then there are a couple optional parameters.

//What the heck is an accumulator? Okay. This is really cool. The accumulator is the returned value of the previous iteration of the loop - the iteration just before the one we're in. Like, if your reducer function multiplies the current value (let's say it's 5) by 2 and returns it, then on the second iteration of reduce(), the accumulator will be 10. Hold on a second though. What does the accumulator equal on the first iteration? Nothing has been returned from the reducer yet. Is it just 'null'? Nope. You specify the initial value of the accumulator in that second parameter to reduce() that I mentioned above.

//"Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value." - MDN entry for reduce()

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