import { ApolloServer } from 'apollo-server'
import schema from './schemas'
import constants from '../config/constants'

const { graphQL: { port } } = constants

const server = new ApolloServer({ schema })

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 GraphQL server ready at ${url}`)
})
