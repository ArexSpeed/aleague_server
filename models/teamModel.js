import mongoose from 'mongoose'

const teamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    site: {
      type: String,
      required: true
    },
    short_name: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
  }
)

const Team = mongoose.model('Team', teamSchema)

export default Team