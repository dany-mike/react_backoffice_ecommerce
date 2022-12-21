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
  const month = new Date(date).getMonth();
  const day = new Date(date).getDay();
  const year = new Date(date).getFullYear();
  const hours = new Date(date).getHours() + 1;
  const minutes = new Date(date).getMinutes();
  return `${months[month]} ${day}, ${year} at ${hours}:${
    minutes.toString().length > 1 ? minutes : "0" + minutes
  } `;
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
