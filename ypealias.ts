// Define a type alias for a string or number
type ID = string | number;

// Use the type alias
const userId: ID = "123";
const postId: ID = 456;

// Define a complex type using a type alias
type User = {
    id: ID;
    name: string;
    age: number;
};

// Use the type alias
const people: User = {
    id: "123",
    name: "John",
    age: 30
};
