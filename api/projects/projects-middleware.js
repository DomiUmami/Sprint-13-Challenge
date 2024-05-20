// add middlewares here related to projects
const Projects = require('../projects/projects-model')


function validateProjectId(req, res, next){
    console.log('validateProjectId middleware')
    next()
}

function validateProject(req, res, next){
    console.log('validateProject middleware')
}

module.exports = {
    validateProjectId,
    validateProject,
}

