// add middlewares here related to actions
const Actions = require('./actions/actions-model')

function validateActions(req, res, next){
    const { action } = req.body
    if (!action || !action.trim()){
        res.status(400).json({
            message: 'missing required action field'
        })
    } else {
        req.action = action.trim()
        next()
    }
}

module.exports = {
    validateActions,

}











