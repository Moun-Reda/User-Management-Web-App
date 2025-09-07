# 🌐 User Management Web App

A responsive web application that interacts with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to simulate user management operations. Built with HTML, CSS, and JavaScript, this app demonstrates core CRUD functionality (Create, Read, Delete) with a stylish neon-themed interface.

---

## 🚀 Features

- **Real-Time Clock**: Displays the current date and time in the header, updating every second.
- **GET Users**:
  - Select "All Users" to fetch and display all users.
  - Select a specific user ID to fetch and display one user.
- **POST User**:
  - Add a new user by entering a name and phone number.
  - Simulates a POST request and displays the new user card.
- **DELETE User**:
  - Select a user ID to simulate deletion.
  - Removes the user card from the display.

---

## 🛠️ How It Works

- Uses `fetch()` to interact with the JSONPlaceholder API:
  - `GET /users` — fetch all users
  - `GET /users/{id}` — fetch user by ID
  - `POST /users` — simulate adding a user
  - `DELETE /users/{id}` — simulate deleting a user
- Dynamically renders user data as animated cards.
- Dropdowns are populated with user IDs from the API.
- Neon-themed UI built with custom CSS, including hover effects, glowing text, and animated transitions.

---

## 📦 Technologies Used

- HTML5
- CSS3 (Flexbox, Neon styling, Animations)
- JavaScript (DOM manipulation, API integration)

## 💡 Notes

- This app uses a mock API, so data changes are not persistent.
- Great for learning RESTful API integration and frontend architecture.

---

## 🙌 Author

**Moun** — Passionate about intelligent systems, web development, and creative UI/UX design.
