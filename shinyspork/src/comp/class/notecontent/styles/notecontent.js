const styles = {
  root: {
    width: '100%',
    padding: '1rem 1rem',
    boxShadow: '-1px 0 2px #e2e2e2',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: '1.3rem',
    borderBottom: '1px solid #e2e2e2',
    paddingBottom: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    paddingTop: '0.5rem',
    flexGrow: 1,
  },
  iconSecondary: {
    padding: '0.5rem',
    fontSize: '0.8rem',
    '&:hover': {
      color: '#2ebd60'
    }
  }
}

export default styles;