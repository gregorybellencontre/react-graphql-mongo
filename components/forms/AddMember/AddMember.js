import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datetime'

class AddMember extends React.Component {
  constructor(props) {
    super(props)

    this.formRef = React.createRef()

    this.state = { date: '' }

    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange(date) {
    this.setState({ date })
  }

  render() {
    const { insertMember } = this.props
    const { date } = this.state

    return (
      <form className="form-inline mt-3">
        <div ref={this.formRef} className="form-group">
          <input
            autoComplete="off"
            className="form-control mr-2"
            id="firstname"
            placeholder="Firstname"
            type="text"
          />

          <input
            autoComplete="off"
            className="form-control mr-2"
            id="lastname"
            placeholder="Lastname"
            type="text"
          />

          <DatePicker
            closeOnSelect
            dateFormat="YYYY-MM-DD"
            inputProps={{
              autoComplete: 'off',
              className: 'form-control mr-2',
              id: 'birth_date',
              placeholder: 'Birth date'
            }}
            onChange={this.handleDateChange}
            timeFormat={false}
            value={date}
          />

          <button
            className="btn btn-primary"
            onClick={e => {
              e.preventDefault()

              const { current: form } = this.formRef

              const firstname = form.querySelector('#firstname').value
              const lastname = form.querySelector('#lastname').value
              const birth_date = form.querySelector('#birth_date').value

              if (firstname.length > 0 && lastname.length > 0 && birth_date.length > 0) {
                insertMember({ variables: { lastname, firstname, birth_date } })

                form.querySelector('#firstname').value = ''
                form.querySelector('#lastname').value = ''
                form.querySelector('#birth_date').value = ''

                this.handleDateChange('')
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

AddMember.propTypes = { insertMember: PropTypes.func.isRequired }

export default AddMember
