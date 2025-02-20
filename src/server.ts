import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import path from 'path'
import routes from './routes'
import errorHandler from './errors/handler'

import './database/connection'

const app = express()

app.use(express.json())
app.use(cors()) // Usar origins para produção
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333, () => console.log('Server running'))