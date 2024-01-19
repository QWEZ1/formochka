const myForm = document.querySelector("#myForm");
const sendButton = document.querySelector("#sendButton");

sendButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(myForm.elements.name.value);
    console.log(myForm.elements.lastName.value);
    console.log(myForm.elements.gender.value);
    console.log(myForm.elements.auto.checked);
})