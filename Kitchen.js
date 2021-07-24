class Kitchen {
    constructor() {
        this.list = [];
    }

    intro() {
        console.log('Sveiki atvyke i Donato virtuve!');
    }

    nupirkta(item, units) {
        let shoppingBag = {
            item, units
        }
        this.list.push(shoppingBag);
        console.log(shoppingBag);
    }

    turimiProduktai() {

        for (let i = 0; i < this.list.length; i++) {
            const product = this.list[i];
            let itemName = product.item;
            // var capitalizedList = (`${i + 1 + `)`} ${product.itemName[0].toUpperCase() + product.itemName.slice(1)}: ${product.units}`);
            var capitalizedList = (`${i + 1 + `)`} ${itemName[0].toUpperCase() + itemName.slice(1)}: ${product.units}`);

            console.log(capitalizedList);
        }
    }
    // sunaudota(itemName, usedUnits) {
    //     for (let i = 0; i < this.list.length; i++) {
    //         const product = this.list[i];
    //         console.log(itemName, product);

    //         if (itemName === product.item) {
    //             product.units -= usedUnits;
    //             break;
    //         }
    //     }



}





module.exports = Kitchen;