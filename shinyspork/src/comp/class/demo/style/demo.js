const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'stretch',    
  }, 
  toolBar: {
    width: '7%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1rem 0',
    boxShadow: '1px 0 2px #e2e2e2',
  },
  iconPrimary: {
    backgroundColor: '#2ebd60',
    color: 'white',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0.5rem'
  },
  iconSecondary: {
    width: '30px',
    height: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0.5rem'
  }
}

export default styles;