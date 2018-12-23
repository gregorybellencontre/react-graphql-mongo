import React from 'react'
import { Mutation } from 'react-apollo'
import { GET_TEAMS, INSERT_TEAM } from '../../../queries/Teams'
import AddTeam from './AddTeam'

const AddTeamContainer = () => (
  <Mutation
    mutation={INSERT_TEAM}
    refetchQueries={[ { query: GET_TEAMS } ]}
  >
    {insertTeam => (<AddTeam insertTeam={insertTeam} />)}
  </Mutation>
)

export default AddTeamContainer
