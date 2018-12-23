import Member from './mongo'
import Team from '../Team/mongo'

export default {
  Query: { members: () => Member.find().populate('teams') },
  Mutation: {
    insertMember: (root, args) => {
      const { lastname, firstname, birth_date } = args
      return Member.create({ lastname, firstname, birth_date })
    },
    removeMember: async(root, args) => {
      const { memberId } = args
      await Team.updateMany({}, { $pull: { members: memberId } })
      await Member.deleteOne({ _id: memberId })
      return true
    }
  }
}
