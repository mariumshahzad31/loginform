function validateForm() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  if (username === "") {
    alert("Username cannot be empty!");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters!");
    return;
  }

  if (!/[A-Za-z]/.test(password)) {
    alert("Password must contain at least one letter!");
    return;
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    alert("Password must contain at least one symbol!");
    return;
  }

  alert("Login successful!");
}
