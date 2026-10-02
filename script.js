const form = document.querySelector("#password-form");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
const lockScreen = document.querySelector("#lock-screen");
const letterPage = document.querySelector("#letter-page");

passwordInput.addEventListener("input", () => {
  passwordInput.value = passwordInput.value.replace(/\D/g, "").slice(0, 4);
  passwordError.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (passwordInput.value === "0210") {
    lockScreen.hidden = true;
    letterPage.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  passwordError.textContent = "Mật khẩu chưa đúng, thử lại nhé ♡";
  passwordInput.value = "";
  passwordInput.focus();
  form.classList.remove("shake");
  requestAnimationFrame(() => form.classList.add("shake"));
});
