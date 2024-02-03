class Point{
    x:number =0;
    y:number =0;
    readonly vertion: string="1111"
    constructor(x:number,y:number){
        this.x =x;
        this.y=y;
    }
}

const point =new Point(10,20);
console.log(`${point.x} - ${point.y}`)