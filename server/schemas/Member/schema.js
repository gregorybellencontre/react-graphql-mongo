export default `
  scalar Date

  type Member {
    _id: ID
    lastname: String
    firstname: String
    birth_date: Date,
    teams: [Team]
  }
  
  type Query {
    members: [Member]
  }
  
  type Mutation {
    insertMember(lastname: String, firstname: String, birth_date: Date): Member
    removeMember(memberId: ID): Member
  }
`
