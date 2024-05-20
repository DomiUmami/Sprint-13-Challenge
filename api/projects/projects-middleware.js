// add middlewares here related to projects
const Projects = require('../projects/projects-model')


async function validateProjectId(req, res, next){
    try {
        const projects = await Projects.getById(req.params.id)
        if(!projects){
            next({ status: 404, message: 'project not found'})
        } else {
            req.projects = projects
            next()
        }
    }
    catch (err){
        res.status(500).json({
            message: 'problem finding project',
        })
    }
}

function validateProject(req, res, next){
    console.log('validateProject middleware')
}

module.exports = {
    validateProjectId,
    validateProject,
}

