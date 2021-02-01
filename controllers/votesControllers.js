import Vote from '../models/voteModel.js'

//Get votes
const getVotes = async(req,res) => {
  const votes = await Vote.find(req.query)
  
  res.json(votes)
}

const addVotes = async (req,res) => {
  const {goalkeeper, defender, midfielder, forward, coach} = req.body
  console.log(goalkeeper, defender, forward)
  const goalkeeperVote = await Vote.findOne({name: goalkeeper})
  const defenderVote = await Vote.findOne({name: defender})
  const midfielderVote = await Vote.findOne({name: midfielder})
  const forwardVote = await Vote.findOne({name: forward})
  const coachVote = await Vote.findOne({name: coach})
  const points = await Vote.findById({_id: "6018088cea9845d6f879a551"})
  
  if(goalkeeperVote){
    goalkeeperVote.points++
    points.allPoints++
    await goalkeeperVote.save() 
    await points.save() 
  }
  if(defenderVote){
    defenderVote.points++
    await defenderVote.save() 
  }
  if(midfielderVote){
    midfielderVote.points++
    await midfielderVote.save() 
  }
  if(forwardVote){
    forwardVote.points++
    await forwardVote.save() 
  }
  if(coachVote){
    coachVote.points++
    await coachVote.save() 
  }
  //res.json(vote)
  return res.json({success: true })

   
}


export {getVotes, addVotes}


