const USER_KEY = "dealflow_user";

export function getUser() {
  const userString = localStorage.getItem(USER_KEY);

  if (userString) {
    return JSON.parse(userString);
  } else {
    return null;
  }
}

export function setUser(user) {
  const userString = JSON.stringify(user);
  localStorage.setItem(USER_KEY, userString);
}

export function clearUser() {
  localStorage.removeItem(USER_KEY);
}