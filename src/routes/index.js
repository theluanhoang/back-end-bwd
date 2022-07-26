const doctorsRouter = require('./doctors')
const patientIdRouter = require('./patientId')

function route(app) {
    app.use('/doctors', doctorsRouter)
    app.use('/patientId', patientIdRouter)
}

module.exports = route