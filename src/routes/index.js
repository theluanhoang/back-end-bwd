const doctorsRouter = require('./doctors')

function route(app) {
    app.use('/doctors', doctorsRouter)
}

module.exports = route