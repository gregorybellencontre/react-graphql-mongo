import gql from 'graphql-tag'

export const GET_MEMBERS = gql`
  {
    members {
      _id
      lastname
      firstname
      birth_date
      teams {
        _id
        title
      }
    }
  }
`

export const INSERT_MEMBER = gql`
  mutation insertMember($lastname: String!, $firstname: String!, $birth_date: Date!) {
    insertMember(lastname: $lastname, firstname: $firstname, birth_date: $birth_date) {
      _id
    }
  }
`

export const REMOVE_MEMBER = gql`
  mutation removeMember($memberId: ID!) {
    removeMember(memberId: $memberId) {
      _id
    }
  }
`
