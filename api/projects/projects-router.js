// Write your "projects" router here!
const express = require('express')

const {
    validateProjectId,
    validateProject
} = require('../projects/projects-middleware')

const Projects = require('../projects/projects-model')

const router = express.Router()


router.get('/api/projects', (req, res, next) => {
    Projects.get()
            .then(projects => {
                res.json(projects)
            })
            .catch(next)
})


router.get('/api/projects/:id', validateProjectId, (req, res) => {
    res.json(req.projects)
})


router.post('/api/projects', validateProject, (req, res, next) => {
   
})


router.put('/api/projects/:id', (req, res, next) => {

})


router.delete('/api/projects/:id', (req, res, next) => {

})


router.get('/api/projects/:id/actions', (req, res, next) => {

})


router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'something tragic inside projects-router happened',
        message: err.message,
        stack: err.stack,
    })
})


module.exports = router

