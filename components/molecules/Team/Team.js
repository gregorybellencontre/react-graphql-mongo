import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Team = ({ classes, insertTeamMember, members, team, removeTeam, removeTeamMember }) => (
  <div className={classes.teamItem}>
    <p className={cx('lead mt-3 mb-2 text-primary', classes.teamTitle)}>
      <span>{team.title}</span>

      <button
        className={cx('fas fa-times', classes.removeTeamButton)}
        onClick={e => {
          e.preventDefault()
          removeTeam({ variables: { teamId: team._id } })
        }}
        type="button"
      />
    </p>

    <ul className="list-group">
      {team.members.map(member => (
        <li key={member._id} className="list-group-item">
          {member.firstname} {member.lastname}
          <button
            className={cx('fas fa-times', classes.removeMemberButton)}
            onClick={e => {
              e.preventDefault()
              removeTeamMember({ variables: { teamId: team._id, memberId: member._id } })
            }}
            type="button"
          />
        </li>
      ))}

      <li className="list-group-item">
        <form className="form-inline">
          <div className="form-group">
            <select className={cx(classes.teamSelect, 'custom-select mr-3')}>
              {members.map(member => team.members
                .filter(m => m._id === member._id).length === 0 && (
                <option key={member._id} value={member._id}>
                  {member.firstname} {member.lastname}
                </option>
              ))}
            </select>

            {members.length === 0 && (
              <p className={classes.emptyList}>
                <em>There is no existing member to add</em>
              </p>
            )}

            {members.length > 0 && (
              <p className={classes.emptyList}>
                <em>This team already contains all existing members.</em>
              </p>
            )}

            <button
              className="btn btn-primary"
              onClick={e => {
                e.preventDefault()
                const select = e.target.previousSibling.previousSibling
                const memberId = select.options[select.selectedIndex].value

                insertTeamMember({ variables: { teamId: team._id, memberId } })
              }}
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </li>
    </ul>
  </div>
)

Team.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  insertTeamMember: PropTypes.func.isRequired,
  members: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  team: PropTypes.shape({}).isRequired,
  removeTeam: PropTypes.func.isRequired,
  removeTeamMember: PropTypes.func.isRequired
}

export default Team
