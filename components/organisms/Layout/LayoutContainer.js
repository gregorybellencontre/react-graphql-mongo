import injectSheet from 'react-jss'
import Layout from './Layout'

const styles = {
  appContainer: {
    padding: 20
  }
}

export default injectSheet(styles)(Layout)
