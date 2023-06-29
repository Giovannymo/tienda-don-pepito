import { default as Product } from "./Product.js";

const $btnSave = document.getElementById("btn-save");
const $containerProducts = document.getElementById("items-container");

$btnSave.addEventListener("click", saveItem);

const items = []
//Guarda en items[] un obj con sus datos
function saveItem(){
    const $txtItem = document.getElementById("txtName");
    const $txtPrice = document.getElementById("txtPrice");
    const $txtDescription = document.getElementById("txtDescription");
    console.log($txtDescription.value)

    const item = new Product($txtItem.value, $txtPrice.value, $txtDescription.value);
    items.push(item);

    reset($txtItem,$txtPrice,$txtDescription);
    
    showCard()

}

function showCard(){
    const fragment = document.createDocumentFragment();
    const $template = document.getElementById("card").content;

    items.forEach( product =>{
        $template.querySelector(".card-title").textContent = product.name
        $template.querySelector(".card-subtitle").textContent = product.price
        $template.querySelector(".card-text").textContent = product.description

        const clone = $template.cloneNode(true)
        fragment.appendChild(clone)
        console.log(product.price)

    })
    $containerProducts.appendChild(fragment)
    
}


//Reinicia cualquier input y lo deja en blanco
function reset(...inputs){
    inputs.forEach((input)=>{
        input.value = ""
    })
}
