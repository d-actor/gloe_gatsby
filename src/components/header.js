import React from 'react'
import { Link } from 'gatsby'
import Gloego from '../images/gloelogo.png'
import FB from '../images/f_logo_RGB-White_1024.png'
import IG from '../images/ig.png'
import Spotify from '../images/Spotify_Logo_RGB_White.png'
import Bandcamp from '../images/bandcamp.png'

const styles = {
  image: {
    height: '9vw',
  },
  link: {
    height: '100%',
  }
}

const Header = ({ siteTitle }) => (
  <div
    style={{
    padding: '1.0875rem 1.0875rem 1.45rem 1.0875rem',
    textAlign: 'left',
    }}
  >
    <Link
      to="/"
      style={{
      color: 'white',
      textDecoration: 'none',
      }}
    >
      <img src={Gloego} alt={siteTitle} style={styles.image} />
    </Link>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.facebook.com/gloeband"
      style={styles.link}
    >
      <img src={FB} alt="facebook" style={styles.image} />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/gloeband"
      style={styles.link}
    >
      <img src={IG} alt="instagram" style={styles.image} />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://open.spotify.com/artist/3WM5LP74A1mISkxx0L6kcT?si=tibAQUvdQ0CNX9K7jGsFLA"
      style={styles.link}
    >
      <img src={Spotify} alt="spotify" style={styles.image} />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://gloe.bandcamp.com/"
      style={styles.link}
    >
      <img src={Bandcamp} alt="bandcamp" style={styles.image} />
    </a>
  </div>
)

export default Header
