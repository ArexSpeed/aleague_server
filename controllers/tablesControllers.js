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

//Edit table
const editTable = async(req,res) => {
  const table = await Table.findById(req.params.id)

  if(table){
    table.season= req.body.season || table.season,
      table.position= req.body.position || table.position,
      table.team_name= req.body.team_name || table.team_name,
      table.matches= req.body.matches || table.matches,
      table.win= req.body.win || table.win,
      table.draw= req.body.draw || table.draw,
      table.lose= req.body.lose || table.lose,
      table.goal_plus= req.body.goal_plus || table.goal_plus,
      table.goal_minus= req.body.goal_minus || table.goal_minus,
      table.bilans= req.body.bilans || table.bilans,
      table.points= req.body.points || table.points

    const updatedTable = await table.save()

    res.json({
      _id: updatedTable._id,
      season: updatedTable.season,
      position: updatedTable.position,
      team_name: updatedTable.team_name,
      matches: updatedTable.matches,
      win: updatedTable.win,
      draw: updatedTable.draw,
      lose: updatedTable.lose,
      goal_plus: updatedTable.goal_plus,
      goal_minus: updatedTable.goal_minus,
      bilans: updatedTable.bilans,
      points: updatedTable.points 
    })
  }else {
    res.status(404)
    throw new Error('Order not found')
  }
}

export {getTable, addTable, editTable}