import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import teamsRoutes from './routes/teamsRoutes.js'
import tablesRoutes from './routes/tablesRoutes.js'
import matchesRoutes from './routes/matchesRoutes.js'

dotenv.config()
connectDB();

const app = express()
app.use(express.json())

app.get('/', (req,res) => {
  res.send('Api is running')
})

app.use('/api/teams', teamsRoutes)
app.use('/api/tables', tablesRoutes)
app.use('/api/matches', matchesRoutes)


const PORT = process.env.PORT || 5000

app.listen(5000,   console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
))