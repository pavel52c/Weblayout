const cart = () => {
    const cartBtn = document.querySelector(".button-cart");
    const cart = document.getElementById("modal-cart");
    const closeBtn = cart.querySelector(".modal-close");
    console.log(closeBtn)

    cartBtn.addEventListener('click', () => {
        cart.style.display = 'flex';
    })

    closeBtn.addEventListener('click', () => {
        cart.style.display = 'none';
    })
}

cart();