require('./db/db');
import express, { Request, Response } from 'express';
const app = express();
app.use(express.json());
import {Db} from './types/taskInterface'
import { addTask ,getAllTasks,updateTask,deleteTask} from './controller/taskcontroller';
// interface TaskRequestBody {
//   task: string;
// }
const PORT:number =4000 ;
app.post('/addtasks',addTask);

app.get('/gettasks',getAllTasks);
app.patch('/updatetasks/:id',updateTask);

app.delete('/deletetasks/:id',deleteTask);

app.listen(PORT, () => {
  console.log('server is running on port 4000');
});
