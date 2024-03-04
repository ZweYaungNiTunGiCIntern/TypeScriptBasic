let value: any;

value = 10; // OK
value = "Hello"; // OK
value = { key: "value" }; // OK
value = [1, 2, 3]; // OK
function Go(value: any) : any {
    console.log(value);
}
Go(20)
Go("Hello")