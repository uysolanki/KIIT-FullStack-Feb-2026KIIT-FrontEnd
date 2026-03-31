const buttonElement=document.querySelector('#one')
//console.log(buttonElement)
buttonElement.innerHTML='Sign Out'
//buttonElement.style.backgroundColor='red'


// buttonElement.style.setProperty('background-color','yellow')
// buttonElement.style.setProperty('color','red')

buttonElement.classList.add('youtube-button')

buttonElement.addEventListener('click', show())

function show()
{
    alert('Welcome to KIIT')
}