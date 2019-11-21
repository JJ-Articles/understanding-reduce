// Several raffles are going on. You can play only one. Which one do you have the best odds of winning?

const entries = {
    red: 40,
    green: 30,
    blue: 15,
    yellow: 5,
    purple: 40,
    red: 100
}

const keys = Object.keys(entries); //?

const bestOdds = keys.reduce((a, v) => {
    if(entries[a] < entries[v]) //?
    {    
        return a;  //?
    } else {
        return v; //?
    }
});

// The succinct version
const bestOdds2 = keys.reduce((a,v)=> entries[a] < entries[v] ? a : v);

bestOdds;
bestOdds2;

// Is 40 < 30, nope! So return v = green
// Is 30 < 15, nope! So return v = blue
// Is 15 < 5, nope! So return v = yellow
// Is 5 < 40, YES! So return a = yellow
// Is 5 < 100, YES! So return a = yellow




