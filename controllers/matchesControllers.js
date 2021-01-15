import Match from '../models/matchModel.js'

//Get matches
const getMatches = async(req,res) => {
  const matches = await Match.find(req.query)
  
  res.json(matches)
}

//Add matches
const addMatch = async(req,res) => {
  //season m_id round host_name host_score guest_name guest_score
  const {season, m_id, round, host_name, host_score, guest_name, guest_score} = req.body

  const match = await Match.create({
    season, m_id, round, host_name, host_score, guest_name, guest_score
  })

  if(match){
    res.status(201).json({
      _id: match._id,
      season: match.season,
      m_id: match.m_id,
      round: match.round,
      host_name: match.host_name,
      host_score: match.host_score,
      guest_name: match.guest_name,
      guest_score: match.guest_score,

    })
  }else{
    res.status(400)
    throw new Error('Invalid match data')
  }
}

//Edit matches
const editMatch = async(req,res) => {
  const match = await Match.findById(req.params.id)

  if(match){
    match.season = req.body.season || match.season,
      match.m_id = req.body.m_id || match.m_id,
      match.round = req.body.round || match.round,
      match.host_name = req.body.host_name || match.host_name,
      match.host_score = req.body.host_score || match.host_score,
      match.guest_name = req.body.guest_name || match.guest_name,
      match.guest_score = req.body.guest_score || match.guest_score

    const updatedMatch = await match.save()

    res.json({
      _id: updatedMatch._id,
      season: updatedMatch.season,
      m_id: updatedMatch.m_id,
      round: updatedMatch.round,
      host_name: updatedMatch.host_name,
      host_score: updatedMatch.host_score,
      guest_name: updatedMatch.guest_name,
      guest_score: updatedMatch.guest_score,
    })
  }else {
    res.status(404)
    throw new Error('Order not found')
  }
}

export {getMatches, addMatch, editMatch}