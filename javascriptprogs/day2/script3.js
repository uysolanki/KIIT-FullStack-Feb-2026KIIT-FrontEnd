import products from "./products.js";

const productTitles = products.map(
    (prod) => prod.title
)

let list = ""

// products.forEach(
//     (prod)=>list+=`<h6> ${prod.title} </h6> 
//     <img src=${prod.image} height='100'></img>`
// );

products.forEach(
    (prod) => list += `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src=${prod.image} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${prod.title}</h5>
    <p class="card-text">${prod.description}</p>
    <a href="#" class="btn btn-primary">ADD TO CART</a>
  </div>
</div>`
);

const divElement = document.querySelector('#one')
divElement.innerHTML = list