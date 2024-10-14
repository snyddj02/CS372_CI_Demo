// Imports
const express = require('express')

// Instantiations
const app = express()

// Configurations
app.set('port', process.env.PORT || 8080)

// Middleware

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Error handlers

// Server bootup or server export
app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}!`)
})
