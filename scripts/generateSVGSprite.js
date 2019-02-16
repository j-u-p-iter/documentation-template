const { generateSprite } = require('@j.u.p.iter/svg-spriter');
const  path = require('path');
const { curry } = require('ramda');

const pathToMDIcons = (basePath) => path.join(path.dirname(require.resolve('material-design-icons')), basePath);

const sprites = {
  // md - Material Design Icons
  md: {
    success: pathToMDIcons('/action/svg/production/ic_check_circle_24px.svg'),
    compare: pathToMDIcons('/action/svg/production/ic_compare_arrows_24px.svg'),
  },
  common: {
    success: pathToMDIcons('/action/svg/production/ic_check_circle_24px.svg'),
    compare: pathToMDIcons('/action/svg/production/ic_compare_arrows_24px.svg', 'compare'),
  },
};

generateSprite({ mode: { symbol: true } }, sprites, path.resolve(__dirname, './output/sprite.svg'))
  .then(data => console.log(data))
  .catch(error => console.error(error));
