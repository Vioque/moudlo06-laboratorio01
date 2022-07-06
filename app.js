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

//Deshabilita el botón
document.getElementById('button').disabled = true

/* Montar HTML dinámico */

//Input de cada artículo
var storeQty = (product) => {
    var quantity = document.createElement('input')
    quantity.setAttribute('class', 'product-qty')
    quantity.setAttribute('id', 'qtyId')
    quantity.setAttribute('type', 'number')
    quantity.setAttribute('value', '0')
    quantity.setAttribute('min', '0')
    quantity.setAttribute('max', product.stock)
    quantity.addEventListener('change', event => {
        product.units = event.target.valueAsNumber
        showButton(products)
    })
    return quantity
}

// Crea una lista ordenada con los productos
var showProducts = productList => {
    var list = document.getElementById('list')
    for (var product of productList) {
        var article = document.createElement('li')
        list.appendChild(article)
        article.innerText = product.description + ' - ' + product.price + '€/ud. '
        article.appendChild(storeQty(product))
    }
}

//Muestra la lista
showProducts(products)

//Habilita el botón Calcular
var showButton = (productList) => {
    for (var product of productList) {
        if (product.units > 0) {
            document.getElementById('button').disabled = false
        }
    }
}

var subtotal = 0, taxes = 0, total = 0

// Calcula el resultado
var calculate = () => {
    for (var product of products) {
        if (product.units > 0) {
            subtotal += product.units * product.price
            taxes += (subtotal * product.tax / 100)
        }
    }
    total += subtotal + taxes
    showTotal(subtotal.toFixed(2), taxes.toFixed(2), total.toFixed(2))
    subtotal = 0
    taxes = 0
    total = 0
    document.getElementById('button').disabled = true
    reset(products)
}

// Muestra el resultado
var showTotal = (subtotal, taxes, total) => {
    document.getElementById('subtotal').innerHTML = 'Subtotal: ' + subtotal + '€'
    document.getElementById('taxes').innerHTML = 'IVA: ' + taxes + '€'
    document.getElementById('total').innerHTML = 'TOTAL: ' + total + '€'
}

document.getElementById('button').addEventListener('click', calculate)

