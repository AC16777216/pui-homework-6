let globalCart = [];

function addToGlobalCart(roll) {
    globalCart.push(roll);
    updateGlobalCart();
    updateCartBadge();
}

// saves globalCart to local storage
function updateGlobalCart() {
    const globalCartString = JSON.stringify(globalCart);
    //console.log(globalCartString);
    localStorage.setItem('globcart', globalCartString);
    updateCartBadge();
}

function retrieveGlobalCart() {
    const globalCartString = localStorage.getItem('globcart');
    globalCart = JSON.parse(globalCartString);
    console.log(globalCart);
    updateCartBadge();
}

function updateCartBadge() {
    const cartBadgeNum = document.querySelector("#cart-badge");
    cartBadgeNum.innerText = globalCart.length;
    //console.log(cartBadgeNum.innerText);
}

if (localStorage.getItem('globcart') != null) {
    retrieveGlobalCart();
}
updateCartBadge();

// PANIC BUTTON - uncomment to reset global cart
//localStorage.removeItem('globcart');