import React from 'react'
import withData from '../lib/apollo'
import Layout from '../components/organisms/Layout'
import TeamsList from '../components/organisms/TeamsList'

export default withData(() => (
  <Layout pageTitle="Teams list">
    <TeamsList />
  </Layout>
))
