let btns = document.querySelectorAll('.addCart'),
    cartCounter = document.querySelector('.counter')

cartCounter.textContent = localStorage.getItem('CartItems') ? localStorage.getItem('CartItems') : '0'

let products = [
    {
        name: 'laptop1',
        price: 100,
        incart: 0
    },
    {
        name: 'laptop2',
        price: 200,
        incart: 0
    },
    {
        name: 'laptop3',
        price: 300,
        incart: 0
    },
    {
        name: 'laptop4',
        price: 400,
        incart: 0
    },
    {
        name: 'laptop4',
        price: 500,
        incart: 0
    },
    {
        name: 'laptop4',
        price: 600,
        incart: 0
    }
]


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        cartItems(products[i])
        totalCost(products[i])
    })
}


function cartItems(product) {
    let savedItems = localStorage.getItem('CartItems') // string
    savedItems = parseInt(savedItems) //number

    if (savedItems) {
        localStorage.setItem('CartItems', savedItems + 1)
        cartCounter.textContent = savedItems + 1
    } else {
        localStorage.setItem('CartItems', 1)
        cartCounter.textContent = '1'
    }

    setItem(product)
}

function setItem(product) {
    let ItemCart = JSON.parse(localStorage.getItem('productInCart'))

    if (ItemCart != null) {

        if (ItemCart[product.name] == undefined) {
            ItemCart = {
                ...ItemCart,
                [product.name]: product
            }
        }

        ItemCart[product.name].incart += 1
    } else {
        product.incart = 1
        ItemCart = {
            [product.name]: product
        }
    }

    localStorage.setItem('productInCart', JSON.stringify(ItemCart))
}


function totalCost(product) {
    let cartTotal = localStorage.getItem('totalCost');

    if (cartTotal != null) {
        cartTotal = parseInt(cartTotal)
        localStorage.setItem('totalCost', cartTotal + product.price)
    } else {
        localStorage.setItem('totalCost', product.price)
    }
}

function displayCart() {
    let cartItems = JSON.parse(localStorage.getItem('productInCart'))
    let cartContainer = document.getElementById('cartContainer')
    if (cartItems && cartContainer) {
        Object.values(cartItems).map(item => {
            cartContainer.innerHTML +=
                `<tr>
                    <th scope="row"> ${item.name} </th>
                    <td>${item.price}</td>
                    <td>  ${item.incart}  </td>
                    <td> $ ${(item.incart) * item.price}</td>
                </tr>
            `
        })
        let cartTotal = localStorage.getItem('totalCost');

        cartContainer.innerHTML +=
            `
                <tr class='table-dark'>
                    <td colspan='2'> Cart Total </td>
                    <td colspan='2'> ${cartTotal}  </td>
                </tr>
            `
    }
}

displayCart()