function categoryFilter(products) {
    return function (category) {
        return products.filter(product => product.category === category)
    }
}

let products = [
    { name: "shirts", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" }
]

console.log(categoryFilter(products)("Clothing"));