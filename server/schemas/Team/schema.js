export default `
  type Team {
    _id: ID
    title: String,
    members: [Member]
  }
  
  type Query {
    teams: [Team]
  }
  
  type Mutation {
    insertTeam(title: String): Team
    removeTeam(teamId: ID): Team
    insertTeamMember(teamId: ID, memberId: ID): Team
    removeTeamMember(teamId: ID, memberId: ID): Team
  }
`
