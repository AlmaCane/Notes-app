import Task from "../models/tasks.js";

export const getTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    if (!allTasks) return res.status(403).send("There aren´t tasks");
    return res.send(allTasks);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const taskFound = await Task.findById(id);
    if (!taskFound) res.status(404).send("task not found");
    return res.send(taskFound);
  } catch (error) {
    throw error;
  }
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    if (!title || !description)
      return res.status(411).send("title and description needed");
    const newTask = await Task.create({ title, description, date });
    return res.send(newTask);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

export const putTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;
  try {
    const taskFound = await Task.findById(id);
    if (taskFound) {
      taskFound.title = title || taskFound.title;
      taskFound.description = description || taskFound.description;
      taskFound.date = date || taskFound.date;
    }
    await taskFound.save();
    return res.send(taskFound);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const removedTask = await Task.findByIdAndDelete(id);
    if (!removedTask) return res.status(404).send("task not found");
    return res.send("task removed succesfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};
