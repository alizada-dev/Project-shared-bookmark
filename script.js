// import functions from storage.js;
import { getUserIds, getData, setData, clearData } from "./storage.js";

// touch HTML elements;
const userSelect = document.getElementById("select-user");
const bookmarksBox = document.getElementById("bookmarks-box");
const bookmarkForm = document.getElementById("bookmark-form");
const submitBtn = document.getElementById("submit-btn");
const siteTitle = document.getElementById("site-title");
const siteDescription = document.getElementById("site-description");
const siteUrl = document.getElementById("site-url");

// global variables;
let currentUser = null;

// load users into dropdown
function loadUsers() {
  const users = getUserIds();

  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user;
    option.textContent = user;
    userSelect.appendChild(option);
  });
}

// load data automatically;
window.onload = loadUsers;
