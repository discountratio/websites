const customForm = document.getElementById("custom-form");
const formInputs = document.querySelectorAll(".form-inputs");
const formArray = [];

let formInputArray = Array.from(formInputs);
console.log(formInputArray);
formInputArray.forEach((input) => {
  input.style.border = "1px solid red";
});


  function displayFormData(filledForm) {
    filledForm.preventDefault();
    const formData = new FormData(filledForm.target);
    var object = {};
    formData.forEach((value, key) => object[key] = value);
   console.log(object);
   formArray.push(object);
   console.log(formArray);
  }

customForm.addEventListener('submit', displayFormData);
 
