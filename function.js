function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(3, 4)); // Output: 7
//return type
function declaration(name, amount, duration) {
    console.log("We will use " + amount + " " + name + " for" + " " + duration + ".");
}
declaration('bicycle', 20, 'two days');
function Quizz(answer) {
    return answer;
}
console.log(Quizz(true));
function addAllNumber(items) {
    var total = items.reduce(function (a, c) { return a + c; }, 0);
    console.log(total);
}
var arr = [3, 56, 2, 8, 10, 23, 8, 26];
addAllNumber(arr);
function Greeting(name, greeting) {
    return "".concat(greeting, " , ").concat(name);
}
var result = Greeting('mario', 'hello');
console.log(result);
