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
    showTotal(newAccount);
}   


function showAccount(newAccount){
    $containerAccount.innerHTML = ''
    const productsAccount = newAccount.carShop
    const fragment = document.createDocumentFragment();
    const $templateAccount = document.getElementById("account").content


    
    
    for(let key in productsAccount){
        const $amount = $templateAccount.querySelector(".table-row > .amount")
        $amount.textContent = productsAccount[key].length
        const $name = $templateAccount.querySelector(".table-row> .name")
        $name.textContent = productsAccount[key][0].name
        const $price = $templateAccount.querySelector(".table-row > .price")
        let totalProduct = 0
        for(let product of productsAccount[key]){
            totalProduct += Number(product.price)
        }
        $price.textContent = totalProduct
   


        const clone = $templateAccount.cloneNode(true)
        fragment.appendChild(clone)
    }


    $containerAccount.appendChild(fragment)
}
function showTotal(newAccount){
    const $total = document.getElementById("total")
    $total.textContent =  newAccount.checkOut()
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

