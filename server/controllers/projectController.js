// filepath: /server/controllers/projectController.js
const Project = require('../models/Project');

// Get All Projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a New Project
exports.createProject = async (req, res) => {
    const { title, description, status, image } = req.body;

    try {
        const project = await Project.create({ title, description, status, image });
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};