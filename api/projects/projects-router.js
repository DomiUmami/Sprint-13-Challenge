// Write your "projects" router here!
const express = require('express')

const router = express.Router()

const {
    validateProjectId,
    validateProject
} = require('../projects/projects-middleware')

const Projects = require('./projects-model')

router.get('/api/projects', (req, res, next) => {

})


router.get('/api/projects/:id', (req, res, next) => {

})


router.post('/api/projects', (req, res, next) => {

})


router.put('/api/projects/:id', (req, res, next) => {

})


router.delete('/api/projects/:id', (req, res, next) => {

})


router.get('/api/projects/:id/actions', (req, res, next) => {

})




module.exports = router

