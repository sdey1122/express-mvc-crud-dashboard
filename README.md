# 🚀 Express MVC CRUD Dashboard (EJS + MongoDB)

A fully functional **CRUD dashboard** built using **Node.js, Express, MongoDB, and EJS**, following a clean **MVC architecture** with a modern UI.

---

## ✨ Features

* ✅ Create, Read, Update, Delete (CRUD)
* ♻️ Soft Delete & Restore System
* ❌ Permanent Delete (with confirmation modal)
* 🔔 Toast Notifications (Add, Edit, Delete)
* ⚡ No unnecessary page reload UX
* 🎯 Clean MVC Architecture
* 🎨 Modern UI with Bootstrap 5 + Custom CSS

---

## 🏗️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* EJS (Server-side rendering)
* Bootstrap 5.3
* Method Override

---

## 📂 Project Structure

```
app/
 ├── config/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── utils/
views/
public/
uploads/
app.js
```

---

## ⚙️ Installation

```bash
git clone <your-repo-url>
cd express-mvc-crud-dashboard
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

## ▶️ Run the Project

```bash
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint                  | Description      |
| ------ | ------------------------- | ---------------- |
| POST   | /products                 | Create           |
| GET    | /products                 | Get all          |
| PUT    | /products/:id             | Update           |
| PATCH  | /products/delete/:id      | Soft Delete      |
| PATCH  | /products/restore/:id     | Restore          |
| DELETE | /products/hard-delete/:id | Permanent Delete |

---

## 🖼️ UI Highlights

* Clean dashboard layout
* Centered headings with professional spacing
* Modal-based delete confirmation
* Toast-based feedback system

---

## 💡 Key Concepts Used

* MVC Architecture
* REST API Design
* Async/Await with Error Handling
* Soft Delete Pattern
* Dynamic Serial Number Handling

---

## 📌 Future Improvements

* Pagination & Search
* Authentication (JWT)
* Sidebar Dashboard Layout
* API Validation Layer

---

## 👨‍💻 Author

**Riku (Subhankar)**
MERN Stack Developer

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
