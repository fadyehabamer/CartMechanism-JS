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
    }
]


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        cartItems()
    })
}


function cartItems() {
    let savedItems = localStorage.getItem('CartItems') // string
    savedItems = parseInt(savedItems) //number

    if (savedItems) {
        localStorage.setItem('CartItems', savedItems + 1)
        cartCounter.textContent = savedItems + 1
        console.log(savedItems);
    } else {
        localStorage.setItem('CartItems', 1)
        cartCounter.textContent = '1'
    }
}