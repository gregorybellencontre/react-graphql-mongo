import mongoose from 'mongoose'

const { Schema } = mongoose

const MemberSchema = new mongoose.Schema(
  {
    lastname: String,
    firstname: String,
    birth_date: Date,
    teams: [ { type: Schema.Types.ObjectId, ref: 'Team' } ]
  },
  { collection: 'members' }
)

export default mongoose.model('Member', MemberSchema)
