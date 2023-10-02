import mongoose, { Schema } from "mongoose";

const TaskSchema = new mongoose.Schema({
  Id: {
    type: String,
    unique: true,
  },
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Title: {
    type: String,
    required: true,
    default: "",
  },
  Subtask: {
    type: Schema.Types.ObjectId,
    ref:'Subtask',
  },
  Description: {
    type: String,
    required: true,
    default: "",
  },
  Iscompleted: {
    type: String,
    default: "Under Consideration",
  },
});

const Task = mongoose.model("Task", TaskSchema);
export default Task;
