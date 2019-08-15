const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    let { data } = await graphql(`
        query {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        episod_no
                    }
                }
            }
        }
    `)
    data.allMarkdownRemark.nodes.forEach(node => {
        let episod_no = node.frontmatter.episod_no
        createPage({
            path: `/episods/${episod_no}`,
            component: `${__dirname}/src/templates/SingleEpisod.js`,
            context: {
                episod_no,
            },
        })
    })
}

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        createNodeField({
            node,
            name: `audio_url`,
            value: `/episods_audio/${node.frontmatter.episod_no}.mp3`,
        })
    }
}
