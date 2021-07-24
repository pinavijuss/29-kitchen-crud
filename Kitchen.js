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
            let productName = product.item;
            var capitalizedList = (`${i + 1 + `)`} ${productName[0].toUpperCase() + productName.slice(1)}: ${product.units}`);

            console.log(capitalizedList);
        }
    }
    sunaudota(item, units) {

        for (const product of this.list) {
            if (product.item === item) {
                product.units -= units;
            }
        }

    }

    sugedesProduktas(item) {
        let updatedList = [];
        for (const product of this.list) {
            if (product.item !== item) {
                updatedList.push(product)

            }
            this.list = updatedList;
        }



    }




}

module.exports = Kitchen;