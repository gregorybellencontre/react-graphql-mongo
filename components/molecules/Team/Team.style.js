export default {
  teamItem: {
    border: [ 2, 'solid', '#D9230F' ],
    borderRadius: 5,
    marginTop: 20,
    '& .list-group-item': { fontSize: 14 }
  },
  teamTitle: {
    display: 'flex',
    color: 'white !important',
    background: '#D9230F',
    marginTop: '0 !important',
    marginBottom: '0 !important',
    padding: [ 5, 10 ],
    boxSizing: 'border-box',
    borderRadius: 0,
    '& span:focus': { outline: 'none' }
  },
  removeMemberButton: {
    marginLeft: 10,
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    color: '#D9230F',
    cursor: 'pointer'
  },
  updateTeamButton: {
    marginLeft: 10,
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    color: '#FFF',
    cursor: 'pointer',
    fontSize: 13
  },
  removeTeamButton: {
    marginLeft: 10,
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    color: '#FFF',
    cursor: 'pointer'
  },
  teamSelect: {
    minWidth: 200,
    height: 32,
    lineHeight: 1.2,
    '&:empty': {
      display: 'none',
      '& + p': { display: 'block' },
      '& + p + button': { display: 'none' }
    }
  },
  emptyList: {
    display: 'none',
    marginBottom: 0,
    fontSize: 13
  }
}
