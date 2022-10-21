import { cart } from './components/cart'
const list = () => {
    let html = "";
    let totalCount = 0;
    for(let i = 0; i< cart.length; i++) {
        html += "<li>"
        html += `<h2>${cart[i].name}</h2>`
        html += `<div>가격: ${cart[i].price}</div>`
        html += `<div>수량: ${cart[i].quantity}</div>`
        html += `</li>`
    }

    totalCount += cart[i].quantity;
    
    return `<ul>${html}</ul>`
}

const App = () => {
    const app = document.getElementById('app');
    if (app !== null) {
        app.innerHTML = `<h1>장바구니</h1>${list()}`
    }
}

App()
console.log('tlqkftlqkf');