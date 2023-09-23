import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import profileRoutes from "./routes/profiles.js"
const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());
dotenv.config();
app.get("/", (req, res) => {
  res.send("User Authentication");
});

// ROUTES
app.use("/auth", userRoutes);
app.use("/users", profileRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DataBase connection Successfull"))
  .catch((err) => console.log(err));

app.use(express.json());

app.listen(8000, () => {
  console.log("Server is active");
});
