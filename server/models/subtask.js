import mongoose from "mongoose";

const SubTaskSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    default: "",
  },
  description: {
    type: String,
    required: true,
    default: "",
  },
  Iscompleted: {
    type: String,
    required: true,
    default: "Under Consideration",
  },
});

const SubTask = mongoose.model("SubTask", SubTaskSchema)
export default SubTask;