console.log(
  "This is Project number 4 which is all about form validation using regular expression"
);

const name1 = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let sumbit = document.getElementById("submit_btn");
let is_validName =  false;
let is_validEmail =  false;
let is_validPhone =  false;

$('#success').hide();
$('#failure').hide();

name1.addEventListener("blur", () => {
  // console.log("name has been blurred")

  let regex = /^[a-zA-z]([a-zA-z0-9]){1,10}$/;
  let str = name1.value;

  if (regex.test(str)) {
    console.log("Your name is Valid");
    name1.classList.remove("is-invalid");
    is_validName =  true;
  } else {
    console.log("Enter a valid name");
    name1.classList.add("is-invalid");
    is_validName =  false;
  }
});

email.addEventListener("blur", () => {
  // console.log("email has been blurred")

  let regex = /^([_\.\-a-zA-Z0-9]+)@([_\.\-a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  if (regex.test(str)) {
    console.log("your email is valid");
    email.classList.remove("is-invalid");
    is_validEmail=  true;
  } else {
    console.log("Enter a valid email");
    email.classList.add("is-invalid");
    is_validEmail=  false;
  }
});

phone.addEventListener("blur", () => {
  console.log("phone has been blurred");

  let regex = /^\+([0-9]){2} ?([0-9]){10}$/;
  let str = phone.value;

  if (regex.test(str)) {
    console.log("Valid Phone number");
    is_validPhone =  true;

    phone.classList.remove("is-invalid");
  } else {
    console.log("Enter a valid phone number");
    phone.classList.add("is-invalid");
    is_validPhone=  false;
  }
});

sumbit.addEventListener("click", (e) => {
  e.preventDefault();
  let failed = document.getElementById("failed");
  let success = document.getElementById("success");
    // console.log(valid)
  if (is_validEmail && is_validName && is_validPhone) {
    console.log("the details are valid and are been submitted");
    // failed.classList.remove("show")
    success.classList.add("show");
    $('#failed').hide();
    $('#success').show();
  } else {
    console.log("the details are invalid, cannot submit the form");
    // success.classList.remove("show")
    
    failed.classList.add("show");
    $('#success').hide();
    $('#failed').show();
  }
});
