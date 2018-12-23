import React from 'react'
import PropTypes from 'prop-types'
import AddTeam from '../../forms/AddTeam'
import Team from '../../molecules/Team'

const TeamsList = ({ data }) => (
  <React.Fragment>
    <div>
      <h3>Add a team</h3>

      <AddTeam />
    </div>

    <div className="mt-4">
      <h3>Teams list</h3>

      {data.teams.length === 0 && (
        <p>There is no existing team.</p>
      )}

      {data.teams.map(team => (
        <Team key={team._id} members={data.members} team={team} />
      ))}
    </div>
  </React.Fragment>
)

TeamsList.propTypes = {
  data: PropTypes.shape({
    members: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    teams: PropTypes.arrayOf(PropTypes.shape({})).isRequired
  }).isRequired
}

export default TeamsList
