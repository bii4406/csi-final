
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let accountList = [];

let loginSignInButton = document.getElementById("login__signInButton");

loginSignInButton.addEventListener('click', (event) => {
    let username = usernameInput.value;
    let password = passwordInput.value;

    let account = {
        username: username,
        password: password
    };
    accountList.push(account);
    console.log(accountList);
    alert('Registration successful!');
});
// SEARCH
function checkKeyword() {
    var keyword = document.getElementById("keyword").value;
    if (keyword === "học viện siêu anh hùng") {
        window.location.href = "film.html";
    }
}
document.getElementById("keyword").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkKeyword();
    }
});
