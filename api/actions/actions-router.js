// Write your "actions" router here!
const express = require('express')

const router = express.Router()




router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'something tragic inside projects-router happened',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router