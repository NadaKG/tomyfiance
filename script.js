const correctPassword = "2908"; // Change this to set your password

function appendNumber(num) {
    document.getElementById("passwordInput").value += num;
}

function clearInput() {
    document.getElementById("passwordInput").value = "";
}

function checkPassword() {
    let enteredPassword = document.getElementById("passwordInput").value;
    if (enteredPassword === correctPassword) {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("message").textContent = "Wrong password! Hint: Our Engagement Date ;)";
        document.getElementById("message").style.color = "red";
        clearInput();
    }
}