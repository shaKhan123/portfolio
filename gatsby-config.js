module.exports = {
  siteMetadata: {
    title: `Shagufta Khan`,
    description: `Here I begin my writing journey with this 90's looking hand made website`,
    author: `sha`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Caveat`
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
   {
     resolve: `gatsby-transformer-remark`,
     options: {
       plugins: [
         `gatsby-remark-relative-images`,
         {
           resolve: `gatsby-remark-images`,
           options: {
              maxWidth: 750,
              linkImagesToOriginal: false
           }
         }
       ]
     }
   },
    `gatsby-plugin-react-helmet`,{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
