import mongoose from 'mongoose'

const { Schema } = mongoose

const TeamSchema = new mongoose.Schema(
  {
    title: String,
    members: [ { type: Schema.Types.ObjectId, ref: 'Member' } ]
  },
  { collection: 'teams' }
)

export default mongoose.model('Team', TeamSchema)
