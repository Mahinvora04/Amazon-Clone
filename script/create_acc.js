// Function to validate the form and save user data to localStorage
function validateForm() {
  var name = document.getElementById("name").value;
  var mobileNumber = document.getElementById("mobile_number").value;
  var password = document.getElementById("password").value;

  // Validate name, mobile number, and password
  if (
    name.trim() === "" ||
    mobileNumber.trim() === "" ||
    password.trim() === ""
  ) {
    alert("Please fill in all fields");
    return false;
  }

  if (isNaN(mobileNumber) || mobileNumber.length !== 10) {
    alert("Invalid mobile number");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  // Save user data to localStorage
  var user = {
    name: name,
    mobileNumber: mobileNumber,
    password: password,
  };
  localStorage.setItem(name, JSON.stringify(user));
}
