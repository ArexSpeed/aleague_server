import Table from '../models/tableModel.js'

//Get table
const getTable = async(req,res) => {
  const tables = await Table.find(req.query)
  console.log(req.query)
  res.json(tables)
}

//Add table
const addTable = async(req,res) => {
  const {season, position, team_name, matches, win, draw, lose, goal_plus, goal_minus, bilans, points} = req.body

  const table = await Table.create({
    season, position, team_name, matches, win, draw, lose, goal_plus, goal_minus, bilans, points
  })

  if(table){
    res.status(201).json({
      _id: table._id,
      season: table.season,
      position: table.position,
      team_name: table.team_name,
      matches: table.matches,
      win: table.win,
      draw: table.draw,
      lose: table.lose,
      goal_plus: table.goal_plus,
      goal_minus: table.goal_minus,
      bilans: table.bilans,
      points: table.points,
    })
  }else{
    res.status(400)
    throw new Error('Invalid team data')
  }
}

export {getTable, addTable}