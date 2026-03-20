export function saveLoggedInUser(email) {
  localStorage.setItem('dealflow_user', email);
}

export function getLoggedInUser() {
  return localStorage.getItem('dealflow_user');
}

export function removeLoggedInUser() {
  localStorage.removeItem('dealflow_user');
}