import express from 'express'
const app: express.Application = express()
import userRoute from './route/index'
import loginRoute from './route/login'

app.set('views', 'src/views')
app.set('view engine', 'pug')

app.use('/', userRoute)
app.use('/login', loginRoute)

app.listen('3333', () => console.log('ok'))
