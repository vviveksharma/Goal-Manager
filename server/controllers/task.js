import Task from "../models/task.js";
import { CheckUser } from "./users.js";

export const createTask = async (req, res) => {
  try {
    const { Username, Title, Description, IsCompleted } = req.body;
    console.log("This is request body = ", req.body)
    const check = await CheckUser(Username);
    console.log("The value of check = ",check)
    if (check == true) {
      const NewTask = new Task({
        Username,
        Title,
        Description,
        IsCompleted,
      });
      const savedTask = await NewTask.save();
      res.status(200).json(savedTask);
    } else {
      console.log(err);
      res.status(404).json({ error: "Unable find the User" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: err.message });
  }
};
