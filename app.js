require("dotenv").config();

const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const dbConnect = require("./app/config/db");

// ROUTES
const viewRoutes = require("./app/routes/views.routes");
const studentRoutes = require("./app/routes/students.routes");

const app = express();

// DB CONNECTION
dbConnect();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));

// VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ROUTES
app.use("/", viewRoutes);
app.use("/students", studentRoutes);

// HEALTH CHECK
app.get("/api/health", (req, res) => {
  res.json({ message: "API is running" });
});

// 404 HANDLER
app.use((req, res) => {
  res.status(404).render("list", {
    students: [],
    error: "Page Not Found",
  });
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error("ERROR:", err.message);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// PORT
const PORT = process.env.PORT || 5100;

// SERVER START
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});