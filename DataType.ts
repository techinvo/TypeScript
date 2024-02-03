//ไม่เแลี่ยน
const n ="a"
let myArray:any[]=[1,"a"]

function sayHello1() {
    if (true) {
        //ทั้ง fun
        var myName: string = "Bob";
    }
    console.log(myName)
}
sayHello1();

function sayHello2() {
    if (true) {
        //แค่ใน if
        let myName: string = "Bob";
    }
    //console.log(myName)
}
sayHello2();

console.log(myArray[0])
console.log(myArray.pop())
console.log(myArray.push("b"))

//towple
let employee:[number,string,boolean][]=[[1,'aa',true],[2,'bb',false]]
console.log(employee)

enum WorkStayus {
    Task=1,Working,Done
}

console.log(WorkStayus.Done)