// Define an interface
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    greet(): string;
}

// Implement the interface
class Student implements Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`;
    }
}

// Create an instance of the class
const student = new Student("John", "Doe", 20);

// Call the method defined in the interface
console.log(student.greet()); // Output: "Hello, my name is John Doe and I'm 20 years old."
