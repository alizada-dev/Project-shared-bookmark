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

// select-user from dropdown event-listener;
userSelect.addEventListener("change", (e) => {
  currentUser = e.target.value;
  const userData = getData(currentUser) || [];
  if (userData.length === 0) {
    alert("No bookmarks saved yet !");
    bookmarkForm.style.display = "block";
    bookmarksBox.style.display = "none";
    return;
  }

  bookmarkForm.style.display = "block";
  bookmarksBox.style.display = "block";

  displayBookmarks();
});

// display bookmarks function;
function displayBookmarks() {
  const bookmarks = getData(currentUser) || [];
  bookmarks.sort((a, b) => {
    return new Date(b.timeStamp) - new Date(a.timeStamp);
  });
  bookmarksBox.innerHTML = "";

  const savedBookmarkTitle = document.createElement("h2");
  savedBookmarkTitle.textContent = "Saved Bookmarks";
  bookmarksBox.appendChild(savedBookmarkTitle);

  bookmarks.forEach((bookmark, index) => {
    bookmarksBox.innerHTML += `
    <div class="bookmark-details">
    <a class="site-title" href="${bookmark.siteUrl}">${bookmark.siteName}</a>
    <p class="site-desc">${bookmark.siteDescription}</p>
    <h3 class="time-stamp">${bookmark.timeStamp}</h3>
    <div class="bookmark-span">
    <span onclick="copyToClipboard(${index})">Copy</span>
    <span onclick="shareBookmark(${index})">Share</span>
    <span onclick="deleteBookmark(${index})">Delete</span>
    </div>
    </div>
    `;
  });
}

// load data automatically;
window.onload = loadUsers;
