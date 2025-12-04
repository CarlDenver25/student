require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const connectDB = require("./config/db");
const customerRoutes = require("./routes/customers");
const viewerRoutes = require("./routes/Viewers");
const errorHandler = require("./middleware/errorhandler");

const setupSwagger = require('./swagger/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Swagger
setupSwagger(app);

// Routes

// Customer routes
app.use("/api/v1/customers", customerRoutes);

// Viewer routes (all routes in Viewers.js)
app.use("/api", viewerRoutes);

// Root
app.get("/", (req, res) => {
  res.send("🌍 Travel Booking API is running!");
});

// Error handler
app.use(errorHandler);

// Connect to DB and start server
connectDB();
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📚 Swagger docs at http://localhost:${PORT}/api-docs`);
});
