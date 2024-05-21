// Write your "projects" router here!
const express = require('express')

const validateProjectId = require('../projects/projects-middleware')

const Projects = require('../projects/projects-model')

const router = express.Router()


router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
      } catch (err) {
        res.status(500).json({ message: 'Error retrieving projects' });
      }
})


router.get('/:id', validateProjectId, async (req, res) => {
    try {
        const project = await Projects.get(req.params.id);
        if (project) {
          res.status(200).json(project);
        } else {
          res.status(404).json({ message: 'Project not found' });
        }
      } catch (err) {
        res.status(500).json({ message: 'Error retrieving project' });
      }
})


router.post('/', async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ message: 'Name and description are required' });
    }
    try {
      const newProject = await Projects.insert(req.body);
      res.status(201).json(newProject);
    } catch (err) {
      res.status(500).json({ message: 'Error creating project' });
    }
  })


router.put('/:id', async (req, res) => {
    const { name, description, completed } = req.body;
    if (!name || !description) {
      res.status(400).json({ message: 'Name and description are required' });
    } else {
      try {
        const updatedProject = await Projects.update(req.params.id, req.body);
        if (updatedProject) {
          res.status(200).json(updatedProject);
        } else {
          res.status(404).json({ message: 'Project not found' });
        }
      } catch (err) {
        res.status(500).json({ message: 'Error updating project' });
      }
    }
})


router.delete('/:id', async (req, res) => {
    try {
      const count = await Projects.remove(req.params.id);
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error deleting project' });
    }
})


router.get('/:id/actions', async (req, res) => {
    try {
      const actions = await Projects.getProjectActions(req.params.id);
      if (actions) {
        res.status(200).json(actions);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving actions' });
    }
})


router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'something tragic inside projects-router happened',
        message: err.message,
        stack: err.stack,
    })
})


module.exports = router

