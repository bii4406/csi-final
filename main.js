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
  
  