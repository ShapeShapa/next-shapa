/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

require('dotenv').config()
const robotstxt = require('generate-robotstxt')

const generateRobots = async () => {
  let production = process.env.PRODUCTION || 'true'
  production = production === 'true'

  const host = production
    ? 'https://next-shapa.vercel.app'
    : 'http://localhost:3000'

  const sitemap = `${host}/api/sitemap`
  const content = await robotstxt({
    policy: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap,
    host,
  })

  fs.writeFileSync('public/robots.txt', content)
}

module.exports = generateRobots
