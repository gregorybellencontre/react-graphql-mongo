import React from 'react'
import withData from '../lib/apollo'
import Layout from '../components/organisms/Layout'

export default withData(() => (
  <Layout pageTitle="Teams manager">
    <p>Welcome on board ! This panel let's you manage teams and members.</p>

    <p>Juste start by choosing a menu.</p>
  </Layout>
))
