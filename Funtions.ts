function getTime(): number {
    return new Date().getTime();
}
console.log(getTime())

function printHello(): void {
    console.log("Hello!");
}
printHello()

function multiply(a: number,b: number){
    return a*b;
}

console.log(multiply(1,2))

function sum(a:number,b:number,...rest:number[]){
    return a + b+rest.reduce((a,b)=>a+b,0)
}

function add({x,y}:{x:number,y:number}):number{
    return x+y
}