
let Final = 0

document.querySelector(".plus").addEventListener("click", (e) => {
      Final = document.querySelector(".number1").value - (document.querySelector(".number2").value * -1)
     document.querySelector(".otvet").innerHTML = Final
})


document.querySelector(".minus").addEventListener("click", (e) => {
    Final = document.querySelector(".number1").value - document.querySelector(".number2").value
   document.querySelector(".otvet").innerHTML = Final
})

document.querySelector(".umnz").addEventListener("click", (e) => {
    Final = document.querySelector(".number1").value * document.querySelector(".number2").value
   document.querySelector(".otvet").innerHTML = Final
})

document.querySelector(".del").addEventListener("click", (e) => {
    Final = document.querySelector(".number1").value / document.querySelector(".number2").value
   document.querySelector(".otvet").innerHTML = Final
})