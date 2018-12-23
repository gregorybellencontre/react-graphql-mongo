import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'
import constants from '../config/constants'

const { graphQL: { host, port } } = constants

const config = {
  link: new HttpLink({
    uri: `${host}:${port}`,
    opts: { credentials: 'same-origin' }
  })
}

export default withData(config)
