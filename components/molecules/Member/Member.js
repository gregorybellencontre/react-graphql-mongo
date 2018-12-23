import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import moment from 'moment/moment'

const Member = ({ classes, member, removeMember }) => (
  <div className={classes.memberItem}>
    <p className={cx('lead mt-3 mb-2 text-primary', classes.memberTitle)}>
      <span>
        {member.firstname} {member.lastname}
        {' '}
        (Born: {moment(member.birth_date).format('MMM D, YYYY')})
      </span>

      <button
        className={cx('fas fa-times', classes.removeMemberButton)}
        onClick={e => {
          e.preventDefault()
          removeMember({ variables: { memberId: member._id } })
        }}
        type="button"
      />
    </p>

    {member.teams.length === 0 && (
      <p className="mt-3 ml-3"><em>This member does not belong to any team.</em></p>
    )}

    <ul className="list-group">
      {member.teams.map(team => (
        <li key={team._id} className="list-group-item">
          {team.title}
        </li>
      ))}
    </ul>
  </div>
)

Member.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  member: PropTypes.shape({}).isRequired,
  removeMember: PropTypes.func.isRequired
}

export default Member
