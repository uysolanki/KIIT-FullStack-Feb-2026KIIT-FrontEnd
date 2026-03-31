

const paraElements=document.getElementsByTagName('p')
console.log(paraElements)

Array.from(paraElements).forEach(
    (para,index)=>
    {   if(index%2==1)
        para.style.backgroundColor='red'
        else
        para.style.backgroundColor='green'    
    }
)

const headingElement=document.getElementsByTagName('h1')
console.log(headingElement)


const southTeams=document.querySelectorAll('.north')
console.log(southTeams)