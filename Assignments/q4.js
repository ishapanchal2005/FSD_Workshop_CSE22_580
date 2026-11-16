const express = require("express");

const app = express();

app.use(express.json());

let tasks = [
    { id: 1, task: "Study JavaScript", completed: false },
    { id: 2, task: "Practice DSA", completed: false }
];

// GET - Show all tasks
app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});

// POST - Add a new task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        task: req.body.task,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task added successfully",
        task: newTask
    });
});

// PUT - Mark task as completed
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.completed = true;

    res.json({
        message: "Task marked as completed",
        task: task
    });
});

// DELETE - Remove task
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const deletedTask = tasks.splice(index, 1);

    res.json({
        message: "Task deleted successfully",
        task: deletedTask[0]
    });
});

app.listen(3000, () => {
    console.log("To-Do server running at http://localhost:3000");
});