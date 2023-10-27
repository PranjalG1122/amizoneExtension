chrome.storage.sync.get(["username", "password"], (result) => {
  if (
    result.username == undefined ||
    result.password == undefined ||
    result.username == "" ||
    result.password == ""
  ) {
    return;
  }
  document.querySelector(`input[name='_UserName']`).value = result.username;
  document.querySelector(`input[name='_Password']`).value = result.password;
  document.querySelector(`button[class~='login100-form-btn']`).click();
});
