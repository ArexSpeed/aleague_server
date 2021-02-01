import mongoose from 'mongoose'

const voteSchema = mongoose.Schema(
  {
    allPoints: {
      type: Number,
    },
    category: {
      type: String,
    },
    name: {
      type: String,
    },
    club: {
      type: String,
    },
    points: {
      type: Number,
    },
  }
)

const Vote = mongoose.model('Vote', voteSchema)

export default Vote