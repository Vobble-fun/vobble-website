import React from 'react'

class Sitemap extends React.Component {
    static async getInitialProps({ res }) {
        res.setHeader('Content-Type', 'application/xml')
        res.write(`    
    <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://vobble.fun</loc>
  </url>
  <url>
    <loc>https://vobble.fun/ourjourney</loc>
  </url>
</urlset>
    
    `)
        res.end()
    }
}

export default Sitemap