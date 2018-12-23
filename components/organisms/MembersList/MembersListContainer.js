import React from 'react'
import { Query } from 'react-apollo'
import MembersList from './MembersList'
import { GET_MEMBERS } from '../../../queries/Members'

const MembersListContainer = props => (
  <Query query={GET_MEMBERS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return (
        <MembersList
          data={data}
          {...props}
        />
      )
    }}
  </Query>
)

export default MembersListContainer
