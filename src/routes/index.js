const doctorsRouter = require('./doctors')
const patientIdRouter = require('./patientId')
const userRouter = require('./users')

function route(app) {
    app.use('/doctors', doctorsRouter)
    app.use('/patientId', patientIdRouter)
    app.use('/users', userRouter)
}

module.exports = route