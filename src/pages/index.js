import React from 'react'
import Layout from '../components/layout'

const styles = {
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '100',
  },
  players: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
}

const IndexPage = () => (
  <Layout>
    <div class="playerContainer" style={styles.players}>
      <iframe class="youtubeEmbed" title="youtube" width="560" height="380" src="https://www.youtube.com/embed/M_cwFfAhsAM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe title="spotify" src="https://open.spotify.com/embed/album/5Blqfe9rZBEreYX9E1K3pg" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  </Layout>
)

export default IndexPage

