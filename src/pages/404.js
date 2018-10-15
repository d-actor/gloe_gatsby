import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <div style={styles.main}>
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... sit on that for a minute.</p>
    </Layout>
  </div>
)

const styles = {
  main: {
    color: '#fff',
    textAlign: 'center',
    marginTop: '5vw',
  },
}

export default NotFoundPage

