How can you use reduce()?

reduce() is flexible. It can be used to do almost anything that requires iterating over an array of values and returning a new value. That being said, we shouldn't forget that anything we can do with reduce(), we can also do with a simple for loop. And sometimes, we're better off with a for loop. Other times, map(), filter() or some other higher-order array method might be a better way to go.

With those caveats out of the way, here are a few of the things you can do more easily with reduce() than with other methods. I've broken it down into categories according to the type of data being iterated over and according to the type of result we want to return.

1. Use reduce() to manipulate an array of string or numbers, returning a new number or string. Examples include: 
    - Number examples that return a number:
        -- find the sum of an array of numbers
        -- find the average of an array of numbers
        -- find the lowest or highest number in an array of numbers
    - String examples that return a number:
        -- find how many times a certain string appears in an array of strings
        -- find the average length of a string in an array of strings
        -- find the length of the longest or shortest string in an array of strings
        -- find the number of vowels or consonants in an array of strings
    - String examples that return a string:
        -- join the first letters of each string in an array of strings to return an acronym or acrostic
2. Use reduce() to manipulate an array of any data type, returning a new object. Examples include:
    - String examples that return an object:
        -- find the frequency of each string in an array of strings. For example, given ['orange', 'pear', 'orange'], return {orange: 2, pear: 1}
    - Object examples that return a number: 
        -- find the number of objects that have a certain property value. For example, given:
        ```js 
        [
            {fruit: 'apple', color: 'red'}, 
            {fruit: 'strawberry', color: 'red'}, 
            {fruit: 'lemon', color: 'yellow'}
        ]
        ```
        Find the number of red fruits.
    - Object examples that return an object:
        -- group objects according to a certain property value. For example, given the object shown above, group the fruits by color and return:
        ```js
        { 
            red:[
                    {fruit: 'apple', color: 'red'}, 
                    {fruit: 'strawberry', color: 'red'}
                ], 
            yellow:[
                    {fruit: 'lemon', color: 'yellow'}
                ]
        }   
        ```


