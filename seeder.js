import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Team from './models/teamModel.js'
import Table from './models/tableModel.js'
import Match from './models/matchModel.js'
import Vote from './models/voteModel.js'
import teams from './data/teams.js'
import tables from './data/tables.js'
import matches from './data/matches.js'
import votes from './data/votes.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importTeam = async () => {
  try {
    await Team.deleteMany()


    const addedTeam = teams.map((team) => {
      return { ...team }
    })

    await Team.insertMany(addedTeam)

    console.log('Teams Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const importTable = async () => {
  try {
    await Table.deleteMany()


    const addedTable = tables.map((table) => {
      return { ...table }
    })

    await Table.insertMany(addedTable)

    console.log('Tables Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const importMatch = async () => {
  try {
    await Match.deleteMany()


    const addedMatch = matches.map((match) => {
      return { ...match }
    })

    await Match.insertMany(addedMatch)

    console.log('Matches Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}


const importVote = async () => {
  try {
    await Vote.deleteMany()


    const addedVote = votes.map((vote) => {
      return { ...vote }
    })

    await Vote.insertMany(addedVote)

    console.log('Votes Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else if(process.argv[2] === 'team') {
  importTeam()
}else if(process.argv[2] === 'table') {
  importTable()
}else if(process.argv[2] === 'match') {
  importMatch()
}
else if(process.argv[2] === 'vote') {
  importVote()
}
else{
  console.log(process.argv, 'process')
}