let plusBtns = Array.from(document.querySelectorAll(".plus-btn"))
let minusBtns = Array.from(document.querySelectorAll(".minus-btn"))
let cards = Array.from(document.querySelectorAll(".card"))
let deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"))
let favs = Array.from(document.querySelectorAll(".fa-heart"))
let totalPrice = document.querySelector(".total-price")

for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click", function () {
        plusBtn.nextElementSibling.innerHTML++;
        total()
    })
}
for (let minusBtn of minusBtns) {
        minusBtn.addEventListener("click", function () {
        minusBtn.previousElementSibling.innerHTML > 0 ? minusBtn.previousElementSibling.innerHTML-- : null;
        total()
    })

}

for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function () {
        cards[i].remove()
        total()
    })
}
for (let fav of favs) {
        fav.addEventListener("click", function () {
        fav.style.color === 'red' ?  fav.style.color = '#ffffff': fav.style.color = 'red'
    })
}
function total() {
    let quantities = Array.from(document.querySelectorAll(".qute"))
    let unitPrices = Array.from(document.querySelectorAll(".unit-price"))

    let p = 0;
    for (let i in unitPrices) { p = p +(quantities[i].innerHTML)*(+unitPrices[i].innerHTML)
    }
    totalPrice.innerHTML = p
}