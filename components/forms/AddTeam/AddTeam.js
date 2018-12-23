import React from 'react'
import PropTypes from 'prop-types'

class AddTeam extends React.Component {
  constructor(props) {
    super(props)

    this.formRef = React.createRef()
  }

  render() {
    const { insertTeam } = this.props

    return (
      <form ref={this.formRef} className="form-inline mt-3">
        <div className="form-group">
          <input
            autoComplete="off"
            className="form-control mr-2"
            id="title"
            placeholder="Team name"
            type="text"
          />

          <button
            className="btn btn-primary"
            onClick={e => {
              e.preventDefault()

              const { current: form } = this.formRef

              const title = form.querySelector('#title').value

              if (title.length > 0) {
                insertTeam({ variables: { title } })

                form.querySelector('#title').value = ''
              }
            }}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    )
  }
}

AddTeam.propTypes = { insertTeam: PropTypes.func.isRequired }

export default AddTeam
