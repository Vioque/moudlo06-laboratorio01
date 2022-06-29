/*
 * Copyright (c) Jorge Vioque Atienza 2022.
 */

// Constantes.
const REGULAR_TYPE = 21
const LOWER_TYPE = 4
const EXEMPT_TYPE = 0

// Entrada.
const products = [
    {
        description: 'Goma de borrar',
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: 'Lápiz H2',
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: 'Cinta rotular',
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: 'Papelera plástico',
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: 'Escuadra',
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: 'Pizarra blanca',
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: 'Afilador',
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: 'Libro ABC',
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    }
]

// Montar HTML dinámico

//Input de cada artículo
var storeQty = (product) => {
    var quantity = document.createElement('input')
    quantity.setAttribute('class', 'product-qty')
    quantity.setAttribute('type', 'number')
    quantity.setAttribute('value', 0)
    quantity.setAttribute('min', 0)
    quantity.setAttribute('max', product.stock)
    quantity.addEventListener('change', event => product.units = event.target.valueAsNumber)
    return quantity
}

// Lista ordenada con los productos
var showProducts = productList => {
    var list = document.getElementById('list')
    for (var product of productList) {
        var article = document.createElement('li')
        list.appendChild(article)
        article.innerText = product.description + ' - ' + product.price + '€/ud. '
        article.appendChild(storeQty(product))
    }
}

showProducts(products)

var total = 0

var calculate = () => {
    console.log(products)
    for (var product of products) {
        total += product.units * product.price
    }
    console.log(total)
    return total

}

document.getElementById('button').addEventListener('click', calculate)

console.log(total)

