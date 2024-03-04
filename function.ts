function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addTwoNumbers(3, 4)); // Output: 7


//return type
function declaration(name: string, amount: number, duration: string): void{
    console.log("We will use "+amount +" "+name+" for"+" "+duration+".");
}
declaration('bicycle',20,'two days')

function Quizz(answer: boolean): boolean{
    return answer;
    
}
console.log(Quizz(true))

function addAllNumber(items: number[]): void{
    const total=items.reduce((a,c) => a+c , 0)
    console.log(total)
}
let arr=[3,56,2,8,10,23,8,26]
addAllNumber(arr)


function Greeting(name: string, greeting: string){
    return `${greeting} , ${name}`
}
const result=Greeting('mario','hello')
console.log(result)