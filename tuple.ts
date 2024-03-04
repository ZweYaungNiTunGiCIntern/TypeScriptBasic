// Declare a tuple type
let tupleExample: [string, number, boolean];

// Initialize the tuple
tupleExample = ["hello", 10, true];

// Access elements of the tuple by index
const str: string = tupleExample[0]; // "hello"
const num: number = tupleExample[1]; // 10
const bool: boolean = tupleExample[2]; // true

// Modify elements of the tuple
tupleExample[0] = "world";
tupleExample[1] = 20;

// Tuple destructuring
const [strValue, numValue, boolValue] = tupleExample;
console.log(strValue); // "world"
console.log(numValue); // 20
console.log(boolValue); // true
