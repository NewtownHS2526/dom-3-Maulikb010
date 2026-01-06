const pro = document.getElementById("sticker");
const pro1 = document.getElementById("keychain");
const pro2 = document.getElementById("plush");
const pro3 = document.getElementById("comic");
const pro4 = document.getElementById("mystery");

const totalamount = document.getElementById("total-span");
const cart = document.getElementById("shopping-cart");


function addsticker () {
    totalamount.textContent = Number(totalamount.textContent) + 0.5;
    cart.textContent = cart.textContent + " sticker pack ";
}
function addkeychain () {
    totalamount.textContent = Number(totalamount.textContent) + 1.5;
        cart.textContent = cart.textContent + " key chain ";
}
function addplush () {
    totalamount.textContent = Number(totalamount.textContent) + 4;
        cart.textContent = cart.textContent + " mini plush ";
}
function addcomic () {
    totalamount.textContent = Number(totalamount.textContent) + 2.75;
        cart.textContent = cart.textContent + " comic book ";
}
function addmystery () {
    totalamount.textContent = Number(totalamount.textContent) + 3.25;
        cart.textContent = cart.textContent + " mystery box ";
}


pro.addEventListener("click", addsticker)
pro1.addEventListener("click", addkeychain)
pro2.addEventListener("click", addplush)
pro3.addEventListener("click", addcomic)
pro4.addEventListener("click", addmystery)
