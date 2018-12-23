import React from 'react'
import { Mutation } from 'react-apollo'
import { GET_MEMBERS, INSERT_MEMBER } from '../../../queries/Members'
import AddMember from './AddMember'

const AddMemberContainer = () => (
  <Mutation
    mutation={INSERT_MEMBER}
    refetchQueries={[ { query: GET_MEMBERS } ]}
  >
    {insertMember => (<AddMember insertMember={insertMember} />)}
  </Mutation>
)

export default AddMemberContainer
