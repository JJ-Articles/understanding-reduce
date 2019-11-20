// Get the tally of items in an array

const fruitBasket = [
	"banana",
	"cherry",
	"orange",
	"apple",
	"cherry",
	"orange",
	"apple",
	"banana",
	"cherry",
	"orange",
	"fig"
];

// This is the verbose way to write this function
const count1 = fruitBasket.reduce((tally, fruit) => {
	if (!tally[fruit]) {
		tally[fruit] = 1;
	} else {
		tally[fruit] = tally[fruit] + 1;
	}
	return tally;
}, {});

// This is more succinct
const count2 = fruitBasket.reduce( (tally, fruit) => {
	tally[fruit] = (tally[fruit] || 0) + 1 ;
	return tally;
} , {})

count1;
count2;
