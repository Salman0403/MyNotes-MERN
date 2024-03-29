const express = require("express");
const notes = require("./data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const notesRoutes = require("./routes/notesRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const cors = require('cors');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Api is running");
// });

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((item) => item._id === req.params.id);
//   res.send(note);
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", notesRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log("Server is running."));
