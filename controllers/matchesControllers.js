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

export {getMatches, addMatch}