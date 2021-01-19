import mongoose from 'mongoose'
import dotenv from 'dotenv'
import teams from './data/teams.js'
import Team from './models/teamModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Team.deleteMany()


    const addedTeam = teams.map((team) => {
      return { ...team }
    })

    await Team.insertMany(addedTeam)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}