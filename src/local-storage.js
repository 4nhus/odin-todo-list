import getUser from "./main";

export function isLocalStorageAvailable() {
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

export function saveUserToLocalStorage() {
  window.localStorage.setItem(
    "user",
    JSON.stringify(getUser(), (_key, value) =>
      value instanceof Set ? [...value] : value,
    ),
  );
}

export { isLocalStorageAvailable, saveUserToLocalStorage };
