# Testing

This document explains how the project was tested against the Checkpoint rubric and includes unit tests written using Jest.

---

## 1. User dropdown

- Verified that the dropdown is populated using `getUserIds()`
- Confirmed that exactly 5 users are returned and displayed in the UI
- Tested that users are loaded on page initialization

---

## 2. Display bookmarks per user

- Selected different users from the dropdown
- Verified that bookmarks are loaded correctly for each user using `getData(userId)`
- Confirmed that only the selected user’s bookmarks are shown

---

## 3. No bookmarks message

- Selected a user with no stored bookmarks
- Verified that the UI shows a message indicating no bookmarks are available

---

## 4. Reverse chronological order

- Added multiple bookmarks with different timestamps
- Verified that bookmarks are sorted using `createdAt` in descending order
- Confirmed newest bookmarks appear at the top of the list

---

## 5. Bookmark details display

- Verified each bookmark displays:
  - Title
  - Description
  - Created timestamp
- Confirmed all data is rendered correctly in the UI

---

## 6. Bookmark link functionality

- Clicked bookmark titles
- Verified that each link opens the correct URL
- Confirmed links work correctly using `target="_blank"`

---

## 7. Copy to clipboard

- Clicked the copy button on bookmarks
- Verified that the correct URL is copied to the clipboard using `navigator.clipboard.writeText`

---

## 8. Like counter

- Clicked like button on individual bookmarks
- Verified that each bookmark has its own independent like counter
- Confirmed likes persist after refresh using localStorage

---

## 9. Add bookmark form

- Entered title, description, and URL
- Submitted the form successfully
- Verified bookmark is added to correct user only
- Confirmed form resets after submission

---

## 10. UI update after adding bookmark

- Added a new bookmark
- Verified it appears immediately in the UI
- Confirmed sorting order is maintained after insertion

---

## 11. Accessibility

- Ran Lighthouse accessibility audit in Chrome DevTools
- Achieved 100 accessibility score
- Ensured proper labels and semantic HTML structure

---

## 12. Unit tests (Jest)

Unit tests were written in `storage.test.js`.

The following behaviors were tested:

- `getUserIds()` returns 5 users correctly
- `setData()` and `getData()` correctly store and retrieve data using localStorage
- `clearData()` removes stored user data properly

These tests ensure the storage layer works correctly and data persistence behaves as expected.

---

## Summary of unit tests file

- File: `storage.test.js`
- Tested:
  - User retrieval
  - Data persistence
  - Data deletion
