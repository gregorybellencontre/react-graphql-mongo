import gql from 'graphql-tag'

export const GET_TEAMS = gql`
  {
    teams {
      _id
      title
      members {
        _id
        lastname
        firstname
        birth_date
      }
    }
    
    members {
      _id
      lastname
      firstname
    }
  }
`

export const INSERT_TEAM = gql`
  mutation insertTeam($title: String!) {
    insertTeam(title: $title) {
      _id
    }
  }
`

export const REMOVE_TEAM = gql`
  mutation removeTeam($teamId: ID!) {
    removeTeam(teamId: $teamId) {
      _id
    }
  }
`

export const INSERT_TEAM_MEMBER = gql`
  mutation insertTeamMember($teamId: ID!, $memberId: ID!) {
    insertTeamMember(teamId: $teamId, memberId: $memberId) {
      _id
    }
  }
`

export const REMOVE_TEAM_MEMBER = gql`
  mutation removeTeamMember($teamId: ID!, $memberId: ID!) {
    removeTeamMember(teamId: $teamId, memberId: $memberId) {
      _id
    }
  }
`
