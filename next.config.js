const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_STATIC_HOST || 'https://www.nodereal.io/static/bnbchainlist' : '',
}