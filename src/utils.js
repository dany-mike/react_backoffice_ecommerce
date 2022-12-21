export function getLocalStorageValue(key) {
  const value = localStorage.getItem(key);
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}

export function getObjectLength(myObj) {
  return Object.keys(myObj).length;
}

export function formatDate(date) {
  return `${months[new Date(date).getMonth()]} ${new Date(
    date
  ).getDay()}, ${new Date(date).getFullYear()} at ${new Date(
    date
  ).getHours()}:${new Date().getMinutes()}`;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
