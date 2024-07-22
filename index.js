//Javascript for BasketBall Counter
//Author: Subir Sutradhar
//Date: 22nd July, 2024

let num1 = 0
let num2 = 0
document.getElementById("scoreH").textContent = num1
document.getElementById("scoreG").textContent = num2

// Function for Home Scores
function plus1H()
{
    num1 += 1
    document.getElementById("scoreH").textContent = num1
}
function plus2H()
{
    num1 += 2
    document.getElementById("scoreH").textContent = num1
}
function plus3H()
{
    num1 += 3
    document.getElementById("scoreH").textContent = num1
    console.log(num1)
}
//Functions for Guest Scores

function plus1G()
{
    num2 += 1
    document.getElementById("scoreG").textContent = num2
}
function plus2G()
{
    num2 += 2
    document.getElementById("scoreG").textContent = num2
}
function plus3G()
{
    num2 += 3
    document.getElementById("scoreG").textContent = num2
}