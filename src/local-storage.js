import { getCurrentUser } from "./main";

function isLocalStorageAvailable() {
  let localStorage;

  try {
    localStorage = window.localStorage;
    const test = "storage test";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

function saveUserToLocalStorage() {
  window.localStorage.setItem(
    "user",
    JSON.stringify(getCurrentUser(), (_key, value) =>
      value instanceof Set ? [...value] : value,
    ),
  );

  console.log(JSON.parse(window.localStorage.getItem("user")));
}

export { isLocalStorageAvailable, saveUserToLocalStorage };
