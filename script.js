const button = document.getElementById("button");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

const statusText = document.getElementById("status");

let username = "";
let password = "";

usernameInput.addEventListener("input", (event) => {
  username = event.target.value;
});

passwordInput.addEventListener("input", (event) => {
  password = event.target.value;
});

button.addEventListener("click", () => {
  chrome.storage.sync.set({ username: username });
  chrome.storage.sync.set({ password: password });
  usernameInput.value = "";
  passwordInput.value = "";
  statusText.textContent = "Saved!";
});
