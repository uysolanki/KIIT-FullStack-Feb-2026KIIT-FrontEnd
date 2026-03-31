import prods from "./products.js"
import {car as favCar,fruit,bike} from "./products.js"
//console.log(products)

// const allProductTitles=products.map(
//     (product)=>product.title
// )
let products=[{
    pno:1,
    pname:'Laptop',
    title:'Dell'
},{
    pno:2,
    pname:'Mobile',
    title:'One Plus'
}]
//console.log(allProductTitles)

prods.forEach(
    (product)=>console.log(product.title)
)

console.log("I drive ",favCar)

let name="Alice"
let age=21
let heigth=5.10

console.log(`My name is ${name}, I am ${age} years old, my height is ${heigth} feets tall`)


const stud={
    rno:1,
    sname:'Alice',
    per:78.5,
    univ:null
}

console.log(stud)
stud.per=88.5
stud.age=21

Object.defineProperty(stud, 'univ', {
    writable: true,
    configurable: false
});
stud.univ = 'KIIT';

Object.defineProperty(stud, 'univ', {
    writable: false
});

console.log(stud)
//stud.univ = 'MIT';


const player={
    jno:18,
    pname:'Virat',
    _team:null
}

Object.defineProperty(player,'team',{
get()
{
return this._team
},
set(value)
{
    if(this._team===null)
        this._team=value
    else
        console.log("Team name cannot be modified")
}
});

player.team='RCB'
console.log(player)
player.team='CSK'
console.log(player)
