import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'

const TeamsList = ({ children, classes, pageTitle }) => (
  <div>
    <Head>
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      <title>{pageTitle}</title>
      <link href="https://bootswatch.com/4/simplex/bootstrap.min.css" rel="stylesheet" />
      <link crossOrigin="anonymous" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" rel="stylesheet" />
      <link href="https://rawgit.com/arqex/react-datetime/master/css/react-datetime.css" rel="stylesheet" />
    </Head>

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link href="/"><a className="navbar-brand">TEAMS MANAGER</a></Link>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/teams"><a className="nav-link">Teams list</a></Link>
          </li>
          <li className="nav-item active">
            <Link href="/members"><a className="nav-link">Members list</a></Link>
          </li>
        </ul>
      </div>
    </nav>

    <div className={classes.appContainer}>
      {children}
    </div>
  </div>
)

TeamsList.defaultProps = { pageTitle: '' }

TeamsList.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}).isRequired,
  pageTitle: PropTypes.string
}

export default TeamsList
