import React from 'react';
import { Link } from 'gatsby';
import Gloego from '../images/gloelogo.png';

const styles = {
  image: {
    height: '15vw',
  },
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '10vw 1.0875rem 1.45rem 1.0875rem',
      textAlign: 'center',
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img src={Gloego} alt={siteTitle} style={styles.image} />
      </Link>
    </h1>
  </div>
)

export default Header
