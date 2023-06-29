export default class Product {

    constructor(name, price, description){
        this.name = name,
        this.price = price,
        this.description = description
    }

    set priceItem(price){ 
        this.price = price;
    }
    get priceItem(){
        return this.price
    }

}