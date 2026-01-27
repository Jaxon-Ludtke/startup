const USER_KEY = "dealflow_user";

export function getUser() {
  const userString = localStorage.getItem(USER_KEY);

  if (userString) {
    return JSON.parse(userString);
  } else {
    return null;
  }
}
