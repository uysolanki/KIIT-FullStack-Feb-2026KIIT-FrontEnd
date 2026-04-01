

const buttonElement=document.getElementById('increment-button')
buttonElement.addEventListener('click', increment)

const showResult=document.querySelector('#show-result')
let count=0
function increment()
{
    count++;
    showResult.innerHTML=count
}

//object destructure
player={
    jno:18,
    pname:'Virat',
    mp:100,
    rs:5000
}

const {rs,jno}=player
console.log(jno)  //18
console.log(rs)   //5000


const rno=1
const name='Alice'

const student={rno,name}


const arr=[10,20,30]

const [a,b,c]=arr
console.log(a) //10
console.log(b) //20
console.log(c) //30

const arr1=[10,20,30]

const [x,,y]=arr1
console.log(x) //10
console.log(y) //30