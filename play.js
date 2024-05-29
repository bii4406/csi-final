fetch('https://phimapi.com/phim/hoc-vien-sieu-anh-hung-mua-7')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {  
    displayMovieInfo(data.movie); 
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });

function displayMovieInfo(movie) {
  document.getElementById("name").innerText = movie.name;
  document.getElementById("type").innerText = movie.category.map((category) => category.name).join(", ");

  document.getElementById("year").innerText = movie.year;
  document.getElementById("quality").innerText = movie.quality;

  const imageUrl = movie.poster_url; 
  document.getElementById("poster_image").src = imageUrl;
}
// search//
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


