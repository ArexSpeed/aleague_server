import mongoose from 'mongoose'
// name matches win draw lose goal_plus goal_minus bilans points
const tableSchema = mongoose.Schema(
  {
    season: {
      type: Number,
      required: true
    },
    position: {
      type: Number,
      required: true,
    },
    team_name: {
      type: String,
      required: true
    },
    matches: {
      type: Number,
      required: true
    },
    win: {
      type: Number,
      required: true
    },
    draw: {
      type: Number,
      required: true
    },
    lose: {
      type: Number,
      required: true
    },
    goal_plus: {
      type: Number,
      required: true
    },
    goal_minus: {
      type: Number,
      required: true
    },
    bilans: {
      type: Number,
      required: true
    },
    points: {
      type: Number,
      required: true
    },

  }
)

const Table = mongoose.model('Table', tableSchema)

export default Table