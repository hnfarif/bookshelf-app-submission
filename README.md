# 📚 Bookshelf App Submission

This is a submission project for the **Bookshelf App** as part of the [Dicoding Academy - Backend Developer Path](https://www.dicoding.com/academies).  
It provides a simple RESTful API to manage books with features to add, update, delete, and retrieve book data using Hapi.js.

---

## 🚀 Features

- Add a book
- Get all books (with optional filtering)
- Get a book by ID
- Update a book by ID
- Delete a book by ID
- Validations and error handling with meaningful messages
- RESTful and consistent API structure

---

## 📦 Project Structure

.
├── src/
│ ├── books.js
│ ├── handler.js
│ ├── helper.js
│ ├── routes.js
│ └── server.js
├── .eslintrc.js
├── .prettierrc
├── Bookshelf API Test.postman_collection.json
├── Bookshelf API Test.postman_environment.json
├── package-lock.json
├── package.json
└── README.md

---

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/bookshelf-app-submission.git
   cd bookshelf-app-submission

   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Run The App**

   ```bash
   # For production
   npm start

   # For development (with live reload)
   npm run start-dev
   ```

---

## 🧪 API Endpoints

To check and test the endpoints, import the Bookshelf Api Test colllecton and environment in Postman using the Bookshelf API Test.postman_collection.json and Bookshelf API Test.postman_environment.json

---

## ⚙️ Scripts

| Command             | Description                 |
| ------------------- | --------------------------- |
| `npm start`         | Run the server              |
| `npm run start-dev` | Run with nodemon (dev mode) |
| `npm run lint`      | Run ESLint on all files     |

---

## 🔍 ESLint

This project uses the Dicoding ESLint config for code style consistency.

To lint the project:

    ```bash
    npm run lint
    ```

---

## 📎 Dependencies

| Package      | Description               |
| ------------ | ------------------------- |
| `@hapi/hapi` | Web framework for Node.js |
| `nanoid`     | Secure ID generator       |
| `nodemon`    | Dev server auto-reloader  |
| `eslint`     | Linter for JS             |

---

## 👨‍💻 Author

Made for the Backend Developer learning path at Dicoding Indonesia.
