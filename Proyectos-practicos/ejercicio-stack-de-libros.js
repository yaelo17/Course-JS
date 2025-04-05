// Exercise: Managing a Stack

let bookCart = []

const ADD_TO_CART_ACTION = 'addToCard'
const REMOVE_FROM_CART_ACTION = 'removeFromCard'
const VIEW_CART_ACTION = 'viewCart'

function viewCart () {
    console.log('Current cart of books: ', bookCart)
}

function performCartActions (action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
          bookCart.push(newBook)
            break;
        case REMOVE_FROM_CART_ACTION:
        if (bookCart.length === 0){
            console.log('Cart is empty. No books to remove.')
        } else {
            const removeBook = bookCart.pop()
            console.log(`Removed book from the cart: ${removeBook}`)
        }
            break;
        case VIEW_CART_ACTION:
         viewCart()
            break;
        default:
            console.log('Invalid action. Please choose a vaid option.')
            break;
    }
}

performCartActions(ADD_TO_CART_ACTION, 'Game of Trones.')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'Ego is the enemy.')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)