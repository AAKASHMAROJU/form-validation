const form = document.getElementById("form");

const name = document.getElementById("name");

const message = document.getElementById("message");

const pwd1 = document.getElementById("password1");

const pwd2 = document.getElementById("password2");

let passwordMatch = false;

let isValid = false;

function validate() {
  isValid = form.checkValidity();

  if (!isValid) {
    message.textContent = "Fill All the Fields  Appropriately";
    message.style.color = "red";
    message.style.borderColor = "red";
    return;
  }

  if (pwd1.value === pwd2.value) {
    passwordMatch = true;
    message.style.color = "green";
    message.style.borderColor = "green";
  } else {
    passwordMatch = false;
    message.textContent = "Match the Passwords Appropriately";
    message.style.color = "red";
    message.style.borderColor = "red";
    pwd1.style.borderColor = "red";
    pwd2.style.borderColor = "red";
    return;
  }

  if (isValid && passwordMatch) {
    message.textContent = "You are Successfully Registered ";
    message.style.color = "green";
    message.style.borderColor = "green";
  }
}

function getFormData() {
  const user = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    password: form.password.value,
    website: form.website.value,
  };
  console.log(user);
}

function formHandler(e) {
  e.preventDefault();
  console.log(e);
  validate();
  if (isValid && passwordMatch) {
    getFormData();
  }
}

form.addEventListener("submit", formHandler);
