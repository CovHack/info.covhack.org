module.exports = {
  siteMetadata: {
    title: "CovHack2020 - Day of Event information",
    header: "CovHack2020",
    description: "Day of event information for CovHack2020",
    url: "https://info.covhack.org",
    submissions: 'https://covhack2020.devpost.com/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#00aeef',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/wifi`,
        name: `wifi`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/has`,
        name: `has`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/schedule`,
        name: `schedule`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/links`,
        name: `links`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
