import Team from './mongo'
import Member from '../Member/mongo'

export default {
  Query: { teams: () => Team.find().populate('members') },
  Mutation: {
    insertTeam: (root, args) => {
      const { title } = args
      return Team.create({ title })
    },
    removeTeam: async(root, args) => {
      const { teamId } = args
      await Member.updateMany({}, { $pull: { teams: teamId } })
      await Team.deleteOne({ _id: teamId })
      return true
    },
    insertTeamMember: async(root, args) => {
      const { teamId, memberId } = args
      await Team.updateOne({ _id: teamId }, { $push: { members: memberId } })
      await Member.updateOne({ _id: memberId }, { $push: { teams: teamId } })
      return true
    },
    removeTeamMember: async(root, args) => {
      const { teamId, memberId } = args
      await Team.updateOne({ _id: teamId }, { $pull: { members: memberId } })
      await Member.updateOne({ _id: memberId }, { $pull: { teams: teamId } })
      return true
    }
  }
}
