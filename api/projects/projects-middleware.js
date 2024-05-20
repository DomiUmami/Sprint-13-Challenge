// add middlewares here related to projects
const Projects = require('../projects/projects-model')

function logger(req, res, next){
    console.log('logger middleware')
    next()
}


function validateProjectId(req, res, next){
   console.log('validateProjectId middleware')
   next()
}

function validateProject(req, res, next){
    console.log('validateProject middleware')
    next()
}

module.exports = {
    logger,
    validateProjectId,
    validateProject,
}

