var value;
value = 10; // OK
value = "Hello"; // OK
value = { key: "value" }; // OK
value = [1, 2, 3]; // OK
function Go(value) {
    console.log(value);
}
Go(20);
Go("Hello");
