import Team from '../models/teamModel.js'

// Get teams
const getTeams = async(req,res) => {
  const teams = await Team.find({})
  res.json(teams)
}
// Show one team
const showTeam = async(req,res) => {
  const team = await Team.findById(req.params.id)
  if(team){
    res.status(201).json(team)
  }
  else{
    res.status(400)
    throw new Error('Wrong id')
  }
  
}

// Add team
const addTeam = async(req,res) => {
  const {name, site, shortName, logo} = req.body;

  const teamExists = await Team.findOne({name})
  if(teamExists){
    throw new Error('Teams is already exists')
  }

  const team = await Team.create({
    name, site, shortName, logo
  })

  if(team){
    res.status(201).json({
      _id: team._id,
      name: team.name,
      site: team.site,
      shortName: team.shortName,
      logo: team.logo
    })
  }else{
    res.status(400)
    throw new Error('Invalid team data')
  }
}

//Edit team
const editTeam = async(req,res) => {
  const team = await Team.findById(req.params.id)

  if(team){
    team.name = req.body.name || team.name
    team.site = req.body.site || team.site
    team.shortName = req.body.shortName || team.shortName
    team.logo = req.body.logo || team.logo

    const updatedTeam = await team.save()

    res.json({
      _id: updatedTeam._id,
      name: updatedTeam.name,
      site: updatedTeam.site,
      shortName: updatedTeam.shortName,
      logo: updatedTeam.logo,
      
    })
  }else {
    res.status(404)
    throw new Error('Order not found')
  }
}

export {getTeams, addTeam, showTeam, editTeam}