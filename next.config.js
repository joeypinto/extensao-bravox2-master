const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  resolve: {
    fallback: {
      "fs": false,
      "path": false,
      "os": false,
    },
},
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['i.imgur.com']
  },
  env: {
    TRAY_TOKEN: 'bravo-2bdc09e0-cc53-4187-880d-03a5eeb82804',
    KEY_SECRET_JWT_EXTBRAVOX: 'g3Pb0zpOiqTG9dbB7xZIKLhJYENi82mCAUHS',
    NEXT_PUBLIC_BRAVOX_TOKEN: 'cd52326b6833294d4ca935cb925641b137ed245db3b67d81ec94918d9db2b0af',
    NEXT_PUBLIC_MAPBOX_TOKEN: 'pk.eyJ1IjoidGFsZWNyb3NzIiwiYSI6ImNrbTlob21kNjB2bGsyd251aWozcHk4bGcifQ.KVVkspwTt5Sv-Swb85zAsA',
    NEXT_PUBLIC_MAPBOX_USER:  'talecross',
    NEXT_PUBLIC_MAPBOX_STYLE: 'ckrct6t3k0d3217ns0qhsbhyh'
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}
