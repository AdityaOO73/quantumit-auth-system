# QuantumIT Full Stack Authentication System

A full-stack authentication system built using **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

This project includes:

- User Registration
- User Login
- JWT Authentication
- Protected Dashboard
- MongoDB Integration
- Persistent Login
- Responsive Dashboard UI
- Dummy + Dynamic User Data

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Lucide React Icons

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- CORS

---

# Features

## Authentication
- User Registration
- User Login
- JWT Token Generation
- Password Hashing using bcryptjs
- Persistent Login using localStorage
- Protected Dashboard Route

## Dashboard
- Responsive User Table
- Sticky Table Header
- Table-only Scrolling
- Hidden Scrollbars
- Dynamic MongoDB Users
- Dummy JSON Users
- User Avatars
- Logout Functionality

## Security
- JWT Verification Middleware
- Protected Backend Routes
- Hashed Passwords
- Token-Based Authentication

---

# Folder Structure

## Frontend

```bash
Client/
├── public/
├── src/
│   ├── components/
│   │   └── ProtectedRoute.jsx
│   ├── data/
│   │   └── employees.json
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   ├── routes/
│   │   └── router.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## Backend

```bash
Server/
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── .env
├── app.js
└── package.json
```

---

# Installation & Setup

## Clone Repository

```bash
git clone <repository-url>
```

---

# Frontend Setup

## Navigate to Client Folder

```bash
cd Client
```

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

## Navigate to Server Folder

```bash
cd Server
```

## Install Dependencies

```bash
npm install
```

## Create .env File

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Run Backend

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# API Endpoints

## Register User

```http
POST /api/register
```

### Request Body

```json
{
  "name": "Aditya Roy",
  "dob": "2003-01-01",
  "email": "aditya@gmail.com",
  "password": "123456"
}
```

---

## Login User

```http
POST /api/login
```

### Request Body

```json
{
  "email": "aditya@gmail.com",
  "password": "123456"
}
```

---

## Get All Users

```http
GET /api/users
```

### Headers

```http
Authorization: <JWT_TOKEN>
```

---

# Authentication Flow

```text
Register/Login
      ↓
JWT Token Generated
      ↓
Token Stored in LocalStorage
      ↓
Protected Dashboard Access
      ↓
Token Sent to Backend
      ↓
JWT Middleware Verification
      ↓
Access Granted
```

---

# MongoDB Schema

```js
{
  name: String,
  dob: String,
  email: String,
  password: String
}
```

---

# Responsive Design

The dashboard is fully responsive:

- Mobile Responsive
- Sticky Table Header
- Hidden Scrollbars
- Horizontal Table Scroll
- Responsive Forms

---

# Middleware

JWT middleware is implemented to verify tokens before accessing protected backend routes.

Example:

```js
router.get(
  "/users",
  authMiddleware,
  getUsers
);
```

---

# Security Features

- Password Hashing
- JWT Verification
- Protected Routes
- Persistent Authentication
- Backend Authorization Middleware

---

# Future Improvements

- Edit User
- Delete User
- Profile Management
- Refresh Tokens
- Role-Based Authentication
- Cloud Deployment

---

# Author

Aditya Roy

Full Stack Developer
```