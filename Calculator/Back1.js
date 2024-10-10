
let Rez = 0


document.querySelector(".plus").addEventListener("click", (e) => {
      Rez =  Number(document.querySelector(".number1").value) + Number(document.querySelector(".number2").value) 
     document.querySelector(".otvet").innerHTML = Rez
})


document.querySelector(".minus").addEventListener("click", (e) => {
    Rez = document.querySelector(".number1").value - document.querySelector(".number2").value
   document.querySelector(".otvet").innerHTML = Rez
})

document.querySelector(".umnz").addEventListener("click", (e) => {
    Rez = document.querySelector(".number1").value * document.querySelector(".number2").value
   document.querySelector(".otvet").innerHTML = Rez
})

document.querySelector(".del").addEventListener("click", (e) => {
    Rez = document.querySelector(".number1").value / document.querySelector(".number2").value
   document.querySelector(".otvet").innerHTML = Rez
})
document.querySelector(".log").addEventListener("click", (e) => {
    Rez = Math.log(document.querySelector(".number1").value) / Math.log(document.querySelector(".number2").value);
   document.querySelector(".otvet").innerHTML = Rez
})