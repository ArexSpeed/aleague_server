import Vote from '../models/voteModel.js'

//Get votes
const getVotes = async(req,res) => {
  const votes = await Vote.find(req.query)
  
  res.json(votes)
}

export {getVotes}


