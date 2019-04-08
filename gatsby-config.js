module.exports = {
  plugins: [
  `gatsby-plugin-netlify`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/blog`,
      name: "markdown-pages",
    },
  },
  `gatsby-transformer-remark`,
  //`gatsby-plugin-netlify`,// make sure to keep it last in the array
  ],
}

