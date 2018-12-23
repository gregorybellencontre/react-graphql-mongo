import React from 'react'
import { Mutation } from 'react-apollo'
import injectSheet from 'react-jss'
import { GET_MEMBERS, REMOVE_MEMBER } from '../../../queries/Members'
import { GET_TEAMS } from '../../../queries/Teams'
import Member from './Member'
import styles from './Member.style'

const MemberContainer = props => (
  <Mutation
    mutation={REMOVE_MEMBER}
    refetchQueries={[
      { query: GET_MEMBERS },
      { query: GET_TEAMS }
    ]}
  >
    {removeMember => (<Member removeMember={removeMember} {...props} />)}
  </Mutation>
)

export default injectSheet(styles)(MemberContainer)
