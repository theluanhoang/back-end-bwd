const doctorsRouter = require('./doctors')
const patientIdRouter = require('./patientId')
const userRouter = require('./users')
const roomRouter = require('./rooms')
const temporarilyRouter = require('./temporarily')
const stayingRouter = require('./staying')
const conversationsRouter = require('./conversations')
const messengerRouter = require('./messagers')

function route(app) {
    app.use('/doctors', doctorsRouter)
    app.use('/conversation', conversationsRouter)
    app.use('/messengers', messengerRouter)
    app.use('/patientId', patientIdRouter)
    app.use('/users', userRouter)
    app.use('/rooms', roomRouter)
    app.use('/temporarily', temporarilyRouter)
    app.use('/staying', stayingRouter)
}

module.exports = route