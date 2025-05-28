const formData = {
    email: "",
    message: "",
  };
  
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
  
const savedData = localStorage.getItem(localStorageKey);

if (savedData !== null) {
    const parsedData = JSON.parse(savedData);
    if (parsedData.email) {
      form.elements.email.value = parsedData.email;
      formData.email = parsedData.email;
    }
    if (parsedData.message) {
      form.elements.message.value = parsedData.message;
      formData.message = parsedData.message;
    }
  }
  
form.addEventListener("input", (event) => {
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
  
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
  
    if (email === "" || message === "") {
      alert("Fill please all fields");
      return;
    }
  
    console.log({ email, message });
  
    localStorage.removeItem(localStorageKey);
    formData.email = "";
    formData.message = "";
    form.reset();
  });
  