import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import teamsRoutes from './routes/teamsRoutes.js'
import tablesRoutes from './routes/tablesRoutes.js'
import matchesRoutes from './routes/matchesRoutes.js'
import votesRoutes from './routes/votesRoutes.js'

dotenv.config()
connectDB();

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req,res) => {
  res.send('Api is running')
})

app.use('/api/teams', teamsRoutes)
app.use('/api/tables', tablesRoutes)
app.use('/api/matches', matchesRoutes)
app.use('/api/votes', votesRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT,   console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
))