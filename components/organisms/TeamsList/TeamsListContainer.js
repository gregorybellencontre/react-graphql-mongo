import React from 'react'
import { Query } from 'react-apollo'
import TeamsList from './TeamsList'
import { GET_TEAMS } from '../../../queries/Teams'

const TeamsListContainer = props => (
  <Query query={GET_TEAMS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return (
        <TeamsList
          data={data}
          {...props}
        />
      )
    }}
  </Query>
)

export default TeamsListContainer
