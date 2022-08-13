const doctorsRouter = require('./doctors')
const patientIdRouter = require('./patientId')
const userRouter = require('./users')
const roomRouter = require('./rooms')
const temporarilyRouter = require('./temporarily')

function route(app) {
    app.use('/doctors', doctorsRouter)
    app.use('/patientId', patientIdRouter)
    app.use('/users', userRouter)
    app.use('/rooms', roomRouter)
    app.use('/temporarily', temporarilyRouter)
}

module.exports = route