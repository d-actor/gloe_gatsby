import React from 'react';
import gloeicon from './images/gloelogodark.png';
import BackgroundImage from './images/background.jpg';

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    console.log(e);
  }
}

class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gastby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          { this.props.headComponents }
          <link rel="shortcut icon" href={gloeicon} />
          { css }
        </head>
        <body style={styles.background}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          { this.props.postBodyComponents }
        </body>
      </html>
    );
  }
}

const styles = {
  background: {
    background: "#222",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: '100%',
  },
}

export default HTML;

