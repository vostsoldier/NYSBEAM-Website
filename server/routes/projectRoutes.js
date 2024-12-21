// filepath: /server/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectController');

// Get all projects
router.get('/', getProjects);

// Create a new project
router.post('/', createProject);

module.exports = router;