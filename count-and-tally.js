// How many phone numbers are in the 503 area code?

// This is a 'tally' problem. You've got an array of stuff, and you want to return the total number of some thing.
// This would be easier to solve with filter, but we want to do it here with reduce

const tels = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];

// This is a little verbose, but easier to understand
const result = tels.reduce( (a,v) => {
    if(v.charAt(1) === '5'){ 
        a+=1;
    }
    return a;
}, 0);

// This is just the same thing with a ternary statement
const result2 = tels.reduce((a,v) => v.charAt(1) === '5'  ? a+=1 : a, 0);

tels;
result;
result2;

// The filter version
const result3 = tels.filter(tel => tel.charAt(1) === '5').length;
result3;

// Here's something that we can't do with filter(): show how many numbers are in each area code.

const tally = tels.reduce((a,v)=> {
    const acode = v.substr(0,5);
    a[acode] = (a[acode] || 0) + 1;
    return a;
}, {});
tally;