export default class Account {

    constructor(carShopping){
        this.carShopping = carShopping;
        this.total = 0 ;
    }

    set carShop(carShopping){
        this.carShopping = carShopping;
    }

    get carShop(){
        return this.carShopping;
    }


    checkOut(){

        for(let id in this.carShopping){
            id.forEach(product =>{
                this.total += product.price
            })
        }

        return this.total
    }

}