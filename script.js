document.addEventListener("DOMContentLoaded", () => {
  // constants for DOM elements
  const form = document.getElementById("subscription-form");
  const emailInput = document.getElementById("email");
  const errorMsg = document.getElementById("error-message");
  const dialog = document.getElementById("success-dialog");
  const successMsg = document.getElementById("success-message");
  const closeDialogBtn = document.getElementById("close-dialog");

  // regular expression for basic email validation
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // function to validate email
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    if (emailRegex.test(email)) {
      emailInput.classList.remove("invalid");
      errorMsg.classList.remove("active");
      form.style.display = "none";
      successMsg.innerHTML = `Your subscription has been placed for your <strong>${email}</strong>!`;
      dialog.showModal();
    } else {
      errorMsg.classList.add("active");
      emailInput.classList.add("invalid");
    }
  });

  // function to close dialog and reset form
  closeDialogBtn.addEventListener("click", () => {
    dialog.close();
    form.style.display = "flex";
    form.reset();
  });
});
