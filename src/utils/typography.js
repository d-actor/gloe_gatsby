import Typography from 'typography';
import maragaTheme from 'typography-theme-moraga';

moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1': {
    fontWeight: '200',
  },
});

const typography = new Typography(moragaTheme);

export default typography;

