const aliases = (prefix = `src`) => ({
  '@components': `${prefix}/components`,
  '@hooks': `${prefix}/hooks`,
  '@pages': `${prefix}/pages`,
  '@routes': `${prefix}/routes`,
  '@utils': `${prefix}/utils`,
  '@assets': `${prefix}/assets`,
});

module.exports = aliases;
