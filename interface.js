// Implement the interface
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Student.prototype.greet = function () {
        return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, " and I'm ").concat(this.age, " years old.");
    };
    return Student;
}());
// Create an instance of the class
var student = new Student("John", "Doe", 20);
// Call the method defined in the interface
console.log(student.greet()); // Output: "Hello, my name is John Doe and I'm 20 years old."
