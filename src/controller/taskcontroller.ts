import express, { Request, Response } from 'express';
import { Task1 } from '../types/taskInterface';
import Task from '../taskModel/taskModel';

export const addTask = async (req: Request, res: Response) => {
  const { task, phone, address }: Task1 = req.body;

  try {
    await Task.create({ task, phone, address });
    res
      .json({
        message: 'Task created successfully',
      })
      .status(200);
  } catch (error) {
    // res.json({
    res.send('error while creating task');
    // })
  }
};

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.json({
      tasks,
    });
  } catch (error) {
    res.send('error while getting tasks');
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newtask = req.body;
    const task = await Task.findByIdAndUpdate(id, newtask, { new: true });
    if (!task) {
      return res
        .json({
          message: 'task not found',
        })
        .status(404);
    }
    res.json({
      message: 'task updated successfully',
    });
  } catch (error) {
    console.log(error);
    return res.send('error while updating tasks');
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    console.log(task)
    if (!task) {
      return res.json({
        message: 'task not found',
      });
    }
    await Task.deleteOne({_id:id})
    res.json({
      message:"task deleted succesfully"
    })
  } catch (error) {
    console.log(error);
  }
}
