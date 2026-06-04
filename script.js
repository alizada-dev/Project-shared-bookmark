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
  const bookmarks = getData(currentUser) || []; // avoids returning null;
  bookmarks.sort((a, b) => b.createdAt - a.createdAt);
  bookmarksBox.innerHTML = "";
  bookmarksBox.innerHTML = `<h2>Saved Bookmarks</h2>`;

  bookmarks.forEach((bookmark, index) => {
    bookmarksBox.innerHTML += `
    <div class="bookmark-details">
    <a class="site-title" href="${bookmark.siteUrl}">${bookmark.siteName}</a>
    <p class="site-desc">${bookmark.siteDescription}</p>
    <h3 class="time-stamp">${bookmark.timeStamp}</h3>

    <button onclick="liked(${bookmark.id})"> Like <span>${bookmark.likes}</span> </button>

    <div class="bookmark-span">
    <span onclick="copyToClipboard(${bookmark.id})">Copy</span>
    <span onclick="shareBookmark(${bookmark.id})">Share</span>
    <span onclick="deleteBookmark(${bookmark.id})">Delete</span>
    </div>
    </div>
    `;
  });
}

// submit button event;
bookmarkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!currentUser) return;
  addBookmark();
});

// add new bookmark function;
function addBookmark() {
  if (!currentUser) return;
  const bookmarks = getData(currentUser) || []; // get old bookmarks;

  // add new bookmark to the storage;
  bookmarks.push({
    siteName: siteTitle.value,
    siteDescription: siteDescription.value,
    siteUrl: siteUrl.value,
    id: Date.now(),
    likes: 0,
    createdAt: Date.now(),
    timeStamp: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })
  });

  setData(currentUser, bookmarks); // saving the new bookmark;

  // reset the inputs;
  siteTitle.value = "";
  siteDescription.value = "";
  siteUrl.value = "";

  bookmarksBox.style.display = "block";

  // display the new bookmark and olds;
  displayBookmarks();
}

// like increment counter function;
function liked(id) {
    const bookmarks = getData(currentUser) || [];
    
    const bookmark = bookmarks.find(
        (bookmark) => bookmark.id === id
    );

    bookmark.likes = bookmark.likes || 0;

    bookmark.likes++;

    setData(currentUser, bookmarks);

    displayBookmarks();
}

// copy bookmark function;
function copyToClipboard(id) {
  const bookmarks = getData(currentUser) || [];
  const bookmark = bookmarks.find((bookmark) => bookmark.id === id);
  navigator.clipboard.writeText(bookmark.siteUrl);
  alert("URL Copied");
}

// delete bookmark function;
function deleteBookmark(id) {
  const bookmarks = getData(currentUser) || [];
  const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);

  setData(currentUser, updatedBookmarks);
  displayBookmarks();
}

// share bookmark function;
function shareBookmark(id) {
  const bookmarks = getData(currentUser) || [];
  const bookmark = bookmarks.find((bookmark) => bookmark.id === id);
  if (navigator.share) {
    navigator.share({
      title: bookmark.siteTitle,
      url: bookmark.siteUrl
    });
  } else {
    alert("This browser does not support sharing !");
  }
}

// load data automatically;
window.onload = loadUsers;
window.deleteBookmark = deleteBookmark;
window.copyToClipboard = copyToClipboard;
window.shareBookmark = shareBookmark;
window.liked = liked;
