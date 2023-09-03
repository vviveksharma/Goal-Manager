import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { login, register } from "./controllers/users.js";
import userRoutes from "./routes/users.js";
const app = express();
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
     
// parse application/json
app.use(express.json())
dotenv.config();
app.get("/", (req, res) => {
  res.send("User Authentication");
});

// ROUTES

app.use("/auth", userRoutes);

mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    })
    .then(() => console.log("DataBase connection Successfull"))
.catch((err) => console.log(err));

app.use(express.json());

app.listen(8000, () => {
  console.log("Server is active");
});

