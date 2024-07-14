const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

const corsOptions = {
  origin: process.env.FRONTEND_URL, // Ensure this is set correctly in your .env file
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// Apply CORS middleware globally before defining routes
app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const userRoutes = require("./routes/users");
const deviceRoutes = require("./routes/devices");
const ticketRoutes = require("./routes/tickets");
const summaryRoutes = require("./routes/summary");

app.use("/users", userRoutes);
app.use("/devices", deviceRoutes);
app.use("/tickets", ticketRoutes);
app.use("/summary", summaryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
