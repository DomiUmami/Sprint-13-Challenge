// Write your "actions" router here!
const express = require('express')

const Actions = require('../actions/actions-model')

const validateActionFields = require('../actions/actions-middlware')


const router = express.Router()


router.get('/', async (req, res) => {
    try {
      const actions = await Actions.get();
      res.status(200).json(actions);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving actions' });
    }
})


router.get('/:id', async (req, res) => {
    try {
      const action = await Actions.get(req.params.id);
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: 'Action not found' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving action' });
    }
})


router.post('/', validateActionFields, async (req, res) => {
    const { project_id, description, notes } = req.body;
    if (!project_id || !description || !notes) {
      res.status(400).json({ message: 'Project ID, description, and notes are required' });
    } else {
      try {
        const project = await Projects.get(project_id);
        if (project) {
          const newAction = await Actions.insert(req.body);
          res.status(201).json(newAction);
        } else {
          res.status(400).json({ message: 'Invalid project ID' });
        }
      } catch (err) {
        res.status(500).json({ message: 'Error creating action' });
      }
    } 
})


router.put('/:id', async (req, res) => {
    const { project_id, description, notes, completed } = req.body;
    if (!project_id || !description || !notes) {
      res.status(400).json({ message: 'Project ID, description, and notes are required' });
    } else {
      try {
        const updatedAction = await Actions.update(req.params.id, req.body);
        if (updatedAction) {
          res.status(200).json(updatedAction);
        } else {
          res.status(404).json({ message: 'Action not found' });
        }
      } catch (err) {
        res.status(500).json({ message: 'Error updating action' });
      }
    }
})


router.delete('/:id', async (req, res) => {
    try {
      const count = await Actions.remove(req.params.id);
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Action not found' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error deleting action' });
    }
})




router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'something tragic inside actions-router happened',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router