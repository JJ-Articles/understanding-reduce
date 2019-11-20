// Group the people in the people array by age such that each age has an associated array of people who are that age.

// This is not something that you could easily do with map() or filter()

const people = [
  { name: "Samuel", age: 45 },
  { name: "Eleanor", age: 26 },
  { name: "Marguerite", age: 26 },
  { name: "Ako", age: 18 }
];

// Here's the solution using reduce()
function groupBy(arr, prop) {
	return arr.reduce((a, v) => {
		const key = v[prop];
		if (!a[key]) a[key] = [];
		a[key].push(v);
		return a;
	}, {});
}

console.log(groupBy(people, "age"));

// And with just one additional line of code, here it is with map()
function groupBy2(arr, prop) {
	// Create a holder object
	const a = {};
	// Map over the array
	arr.map(v => {
		// Create a key equal to the current object's 'prop' property value
		const key = v[prop];
		// Unless there's already a property in 'a' by the name of 'key', create it and set it equal to an empty array.
		if(!a[key]) a[key] = [];
		// Push the current object into the array
		a[key].push(v);
	});
	// return the holder object
	return a;
}
console.log(groupBy2(people, 'age'));

