import React from 'react'
import withData from '../lib/apollo'
import Layout from '../components/organisms/Layout'
import MembersList from '../components/organisms/MembersList'

export default withData(() => (
  <Layout pageTitle="Members list">
    <MembersList />
  </Layout>
))
