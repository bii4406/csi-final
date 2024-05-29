let btnPlus = document.getElementById('btn-plus');
let amount = document.getElementById('amount');
let btnAmount = document.getElementById('btn-amount')

btnPlus.addEventListener('click',(event) => {
    event.preventDefault()
    console.log(amount.value)
    amount.value++ 
})
btnAmount.addEventListener('click',(event) => {
    event.preventDefault()
    console.log(amount.value)
    amount.value--
})
function checkKeyword() {
    var keyword = document.getElementById("keyword").value;
    if (keyword === "học viện siêu anh hùng") { 
        window.location.href = "film.html";   
    }
  }
  document.getElementById("keyword").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkKeyword();
    }
  });
  