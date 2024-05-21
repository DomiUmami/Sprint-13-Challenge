
// require your server and launch it
const express = require('express')
const server = require('./api/server')

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
