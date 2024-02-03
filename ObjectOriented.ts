class Human {
    name:string=''
    lastname:string=""
    age:number=0
    sayHello(){
        return "Hello may name is"+this.name+this.lastname+"and"+this.age+" years old."
    }
}

const user1: any =new Human()
user1.name="techin"
user1.lastname="charupongsiri"
user1.age= 22
console.log(user1.sayHello())