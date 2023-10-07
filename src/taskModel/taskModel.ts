import mongoose from 'mongoose';
import { Task1 } from '../types/taskInterface';
const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model<Task1>('Task', TaskSchema);
export default Task;
