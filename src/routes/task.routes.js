const express = require('express');
const router = express.Router(); //Definir ruta del servidor.


const Task = require('../models/task');

//callback cuando la tarea a sido terminada.

//General Find
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

//find by ID
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
})

//CREATE
router.post('/', async (req, res) => {
    //crear datos
    const {title, description} = req.body;
    const task = new Task({
        title,
        description
    });
    await task.save();
    res.json({
        status: 'Task Saved'
    });
});

//UPDATE
router.put('/:id', async (req, res) => {
    const {title, description } = req.body;
    const newTask = {title, description};

    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json('Task Updated');
});

//DELETE
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);

    res.json('Task Deleted');
});

module.exports = router;