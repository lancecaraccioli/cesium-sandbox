module.exports = {
  'extends': ['eslint:recommended', 'google'],
  'plugins': [
    'standard',
    'promise',
    'node'
  ],
  'parserOptions': {
    'ecmaVersion': 6,
    "sourceType": "module",
  },
  rules: {
    'max-len': [2, {
      'ignoreComments': true
    }]
  }
}
