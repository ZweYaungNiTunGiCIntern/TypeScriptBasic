// Declare a tuple type
var tupleExample;
// Initialize the tuple
tupleExample = ["hello", 10, true];
// Access elements of the tuple by index
var str = tupleExample[0]; // "hello"
var num = tupleExample[1]; // 10
var bool = tupleExample[2]; // true
// Modify elements of the tuple
tupleExample[0] = "world";
tupleExample[1] = 20;
// Tuple destructuring
var strValue = tupleExample[0], numValue = tupleExample[1], boolValue = tupleExample[2];
console.log(strValue); // "world"
console.log(numValue); // 20
console.log(boolValue); // true
