module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-stylus`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'podcast_episods',
                path: `${__dirname}/episods`,
            },
        },
    ],
}
