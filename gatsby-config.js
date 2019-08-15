module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-stylus`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'podcast_episods',
                path: `${__dirname}/episods`,
            },
        },
    ],
}
