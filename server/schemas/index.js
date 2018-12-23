import mongoose from 'mongoose'
import { merge } from 'lodash'
import { mergeTypes } from 'merge-graphql-schemas'
import { makeExecutableSchema } from 'graphql-tools'
import constants from '../../config/constants'
import { schema as Team, resolvers as teamResolvers } from './Team'
import { schema as Member, resolvers as memberResolvers } from './Member'

const { ObjectId } = mongoose.Types
const { mongoAuth } = constants

mongoose.connect(
  mongoAuth,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(`MongoDB connection error: ${err}`)
      process.exit(1)
    }
  }
)

ObjectId.prototype.valueOf = function() {
  return this.toString()
}

const types = [
  Team,
  Member
]

export default makeExecutableSchema({
  typeDefs: mergeTypes(types, { all: true }),
  resolvers: merge(teamResolvers, memberResolvers)
})
