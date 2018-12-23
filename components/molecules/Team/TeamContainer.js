import React from 'react'
import { Mutation } from 'react-apollo'
import { adopt } from 'react-adopt'
import injectSheet from 'react-jss'
import {
  INSERT_TEAM,
  REMOVE_TEAM,
  INSERT_TEAM_MEMBER,
  REMOVE_TEAM_MEMBER, GET_TEAMS
} from '../../../queries/Teams'
import { GET_MEMBERS } from '../../../queries/Members'
import Team from './Team'
import styles from './Team.style'

const insertTeam = ({ render }) => (
  <Mutation
    mutation={INSERT_TEAM}
    refetchQueries={[ { query: GET_TEAMS } ]}
  >
    {mutation => render(mutation)}
  </Mutation>
)

const removeTeam = ({ render }) => (
  <Mutation
    mutation={REMOVE_TEAM}
    refetchQueries={[
      { query: GET_TEAMS },
      { query: GET_MEMBERS }
    ]}
  >
    {mutation => render(mutation)}
  </Mutation>
)

const insertTeamMember = ({ render }) => (
  <Mutation
    mutation={INSERT_TEAM_MEMBER}
    refetchQueries={[
      { query: GET_TEAMS },
      { query: GET_MEMBERS }
    ]}
  >
    {mutation => render(mutation)}
  </Mutation>
)

const removeTeamMember = ({ render }) => (
  <Mutation
    mutation={REMOVE_TEAM_MEMBER}
    refetchQueries={[
      { query: GET_TEAMS },
      { query: GET_MEMBERS }
    ]}
  >
    {mutation => render(mutation)}
  </Mutation>
)

const Composed = adopt({
  insertTeam,
  removeTeam,
  insertTeamMember,
  removeTeamMember
})

const TeamContainer = props => (
  <Composed>
    {mutations => (
      <Team
        insertTeam={mutations.insertTeam}
        insertTeamMember={mutations.insertTeamMember}
        removeTeam={mutations.removeTeam}
        removeTeamMember={mutations.removeTeamMember}
        {...props}
      />
    )}
  </Composed>
)

export default injectSheet(styles)(TeamContainer)
