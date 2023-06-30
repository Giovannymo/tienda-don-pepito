import { default as Product } from "./Product.js";
import { default as Account } from "./Account.js"

const $btnSave = document.getElementById("btn-save");
const $containerProducts = document.getElementById("items-container");
const $containerAccount = document.getElementById("accountFinish")

$btnSave.addEventListener("click", saveItem);
$containerProducts.addEventListener("click", sendItem)

const items = []
const carShop = {


}


function sendItem(e){

    const $btnSelect = e.target.classList.contains("btn")
        ? e.target.id
        : undefined

    if($btnSelect){
        if(carShop.hasOwnProperty($btnSelect)){
            for(let key in carShop){
                if(key === $btnSelect){
                    carShop[key].push(items[$btnSelect])
                }
            }
        }else{
            carShop[$btnSelect] = [items[$btnSelect],];    
        }
    }


    const newAccount = new Account(carShop);
    showAccount(newAccount);
}   


function showAccount(newAccount){
    const productsAccount = newAccount.carShop
    const fragment = document.createDocumentFragment();
    const $templateAccount = document.getElementById("account").content

    for(let id in productsAccount){
        
        productsAccount[id].forEach(product =>{ 
            console.log(product);
        })
    }


}


//Guarda en items[] un obj con sus datos
function saveItem(){
    const $txtItem = document.getElementById("txtName");
    const $txtPrice = document.getElementById("txtPrice");
    const $txtDescription = document.getElementById("txtDescription");

    const item = new Product($txtItem.value, $txtPrice.value, $txtDescription.value);
    items.push(item);

    reset($txtItem,$txtPrice,$txtDescription);
    
    showCard()

}

function showCard(){
    clear()
    const fragment = document.createDocumentFragment();
    const $template = document.getElementById("card").content;

    items.forEach( (product, index) =>{

        $template.querySelector(".card-subtitle").textContent = product.price
        $template.querySelector(".card-title").textContent = product.name
        $template.querySelector(".card-text").textContent = product.description
        $template.querySelector("button").id = index

        
        const clone = $template.cloneNode(true)
        fragment.appendChild(clone)

    })
    $containerProducts.appendChild(fragment)
    
}


//Reinicia cualquier input y lo deja en blanco
function reset(...inputs){
    inputs.forEach((input)=>{
        input.value = ""
    })
}

function clear(){
    $containerProducts.innerHTML = ''
}

