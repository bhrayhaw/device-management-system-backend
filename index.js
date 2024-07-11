const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { swaggerUi, specs } = require("./swaggerDocs/swagger");

dotenv.config();

// Initialize the Express application
const app = express();

// Connect to the database
connectDB();

// Define your CORS options
const corsOptions = {
  origin: "http://localhost:5174",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// Use CORS middleware
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const userRoutes = require("./routes/users");
const deviceRoutes = require("./routes/devices");
const ticketRoutes = require("./routes/tickets");
const summaryRoutes = require("./routes/summary")

// Use routes
app.use("/users", userRoutes);
app.use("/devices", deviceRoutes);
app.use("/tickets", ticketRoutes);
app.use("/summary", summaryRoutes);

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
