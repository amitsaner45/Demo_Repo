document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Log the captured data in the console
    console.log("Captured Data:");
    console.log("Username: " + username);
    console.log("Password: " + password);

    // Simple validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        errorMessage.style.display = "block";
    } else if (username !== "admin" || password !== "password123") {
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert("Login successful!");
        // You can redirect or do something else here on success
    }
});
