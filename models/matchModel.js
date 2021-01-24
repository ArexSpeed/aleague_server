import mongoose from 'mongoose'
// season m_id round host_name host_score guest_name guest_score
const matchSchema = mongoose.Schema(
  {
    season: {
      type: Number,
      required: true
    },
    m_id: {
      type: Number,
      required: true
    },
    round: {
      type: Number,
      required: true
    },
    host_name: {
      type: String,
      required: true
    },
    host_score: {
      type: Number,
    },
    guest_name: {
      type: String,
      required: true
    },
    guest_score: {
      type: Number,
    },
  })
  const Match = mongoose.model('Match', matchSchema)

export default Match