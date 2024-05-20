// Write your "projects" router here!
const express = require('express')

const {
    validateProjectId,
    validateProject
} = require('../projects/projects-middleware')

const Projects = require('../projects/projects-model')

const router = express.Router()


router.get('/api/projects', (req, res, next) => {
    console.log(Projects)
})


router.get('/api/projects/:id', validateProjectId, (req, res) => {
    res.json(req.user)
})


router.post('/api/projects', validateProject, (req, res, next) => {
    Projects.insert({ name: req.name})
            .then(newProject => {
                res.status(201).json(newProject)
            })
            .catch(next)
})


router.put('/api/projects/:id', validateProjectId, validateProject, (req, res, next) => {
    console.log(req.user)
})


router.delete('/api/projects/:id', validateProjectId, (req, res, next) => {
    console.log(req.user)
})


router.get('/api/projects/:id/actions', validateProjectId, (req, res, next) => {
    console.log(req.user)
})


router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'something tragic inside projects-router happened',
        message: err.message,
        stack: err.stack,
    })
})


module.exports = router;

