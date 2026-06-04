# Bookmark Manager

This is collaborative web application that allows users to view, create, and interact with bookmarks. Users can select from a list of predefined users, browse their bookmarks, create new bookmarks, copy bookmark URLs to the clipboard, and like bookmarks. All bookmark and like data persists locally between browser sessions. on top of testing our basic DOM manipulation it was also meant to test our ability to create user stories from requirements and use them to create reasonably sized tickets.
We used the kanban method for agile development because of the short timeframe within which we had to come up with an mvp.

## Repository

**GitHub Repository:** (https://github.com/alizada-dev/Project-shared-bookmark)

---

## Features

### User Selection

- Dropdown menu containing five users.
- Selecting a user displays their associated bookmarks.
- If a user has no bookmarks, an informative message is displayed.

### Bookmark Display

Bookmarks are displayed in reverse chronological order and include:

- Bookmark title
- Bookmark description
- Creation timestamp
- Hyperlink to the original URL

### Copy to Clipboard

Each bookmark includes a "Copy URL" button that:

- Copies the bookmark URL to the user's clipboard.
- Provides visual feedback when the action succeeds.

### Like Counter

Each bookmark includes a like button and counter.

- Like counts start at 0.
- Clicking the like button increments the count.
- Each bookmark maintains its own independent count.
- Like counts are persisted using local storage and remain available after closing and reopening the browser.

### Create Bookmark

Users can create new bookmarks using a form containing:

- URL input
- Title input
- Description input
- Submit button

After submission:

- The bookmark is saved for the currently selected user.
- The bookmark list refreshes automatically.
- The newly created bookmark appears in the correct chronological position.

### Accessibility

Accessibility was a key consideration during development:

- Semantic HTML elements used throughout.
- Form inputs are associated with labels.
- Keyboard navigation fully supported.
- Accessible button and link text.
- Lighthouse Accessibility Score: **100**

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

### Testing

- Jest

### Deployment

- GitHub
- Netlify

---

## Installation

Clone the repository:

```bash
git clone https://github.com/alizada-dev/Project-shared-bookmark.git
```

Navigate to the project directory:

```bash
cd Project-shared-bookmark
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

---

## Project Structure

```text
project-shared-bookmark/
├── package.json
├── jest.config.js
├── index.html
├── script.js
├── storage.js
├── storage.test.js
└── node_modules/
```

---

## Testing

Unit tests have been written for non-trivial application logic, including:

- storage function utilities
- Data persistence utilities
- User filtering logic

To run the tests:

```bash
npm test
```

---

## How the Project Meets the Requirements

| Requirement                                  | Implemented |
| -------------------------------------------- | ----------- | --- | --- |
| Dropdown containing five users               |             | x   |     |
| User selection displays bookmarks            |             | x   |     |
| Empty state message displayed                |             | x   |     |
| Reverse chronological ordering               |             | x   |     |
| Title, description and timestamp shown       |             | x   |     |
| Title links to bookmark URL                  |             | x   |     |
| Copy to clipboard button                     |             | x   |     |
| Persistent like counters                     |             | x   |     |
| Bookmark creation form                       |             | x   |     |
| New bookmarks added to selected user only    |             | x   |     |
| Updated bookmark list shown after submission |             | x   |     |
| Data persists across browser sessions        |             | x   |     |
| Lighthouse Accessibility Score 100           |             | x   |     |
| Unit tests included                          |             | x   |     |

---

## Future Improvements

- Bookmark search and filtering.
- Category/tag support.
- Sorting options.
- End-to-end testing.
- Toast notifications for user actions.

---

## Contributors

- Mustaf Asani
- Roman Sanaye
- Fida Ali Zada
