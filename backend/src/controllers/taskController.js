const tasks =require('../models/taskModel.js');

const getTasks = (req, res) => {
  res.json(tasks);
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = tasks.find(task => task.id == id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};


const createTask = (req, res) => {
  const newTask = { id: Date.now(), ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(task => task.id == id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...req.body };
    res.json(tasks[index]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(task => task.id == id);
  if (index !== -1) {
    const deleted = tasks.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById
};

