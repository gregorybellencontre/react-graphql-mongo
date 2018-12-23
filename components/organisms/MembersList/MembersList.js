import React from 'react'
import PropTypes from 'prop-types'
import AddMember from '../../forms/AddMember'
import Member from '../../molecules/Member'

const MembersList = ({ data }) => (
  <React.Fragment>
    <div>
      <h3>Add a member</h3>

      <AddMember />
    </div>

    <div className="mt-4">
      <h3>Members list</h3>

      {data.members.length === 0 && (
        <p>There is no existing member.</p>
      )}

      {data.members.map(member => (
        <Member key={member._id} member={member} />
      ))}
    </div>
  </React.Fragment>
)

MembersList.propTypes = {
  data: PropTypes.shape({ members: PropTypes.arrayOf(PropTypes.shape({})).isRequired }).isRequired
}

export default MembersList
