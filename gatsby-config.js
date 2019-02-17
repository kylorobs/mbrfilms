module.exports = {
  siteMetadata: {
    title: `Matthew Robinson Film Portfolio`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `A portfolio of work`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
     {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
      },
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-vimeo`,
      options: {
        clientID: 'dc0294040cc7c993aa8dfdcbe0d43ad512b7d35a',
        clientSecret: 'xEdsJkB1aCNwW0ltXpos1BeDxz1GDmL2mz7rpDy2DmRlUDgQaDL6T4Cj41yoIRILgP4L8WqtXF0A+SuP4o5BC8e309meFtp5NjJomQz9nfg0uzvvDua90g/BdmVtngfo',
        userID: '46445224',
        searchQuery: 'webdisplay',
        transformer (video) {
          // Transform the video data [OPTIONAL]
          // i.e. Add extra fields or alter existing field
          video.album = 'Website'
          return video
        }
      },
    },
  ],
}
