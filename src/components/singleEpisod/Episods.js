import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Episod from '../Episod'
import { AppContext } from 'ink'

const Episods = () => {
    let { episod } = useContext(AppContext)

    let res = useStaticQuery(graphql`
        {
            allMarkdownRemark(sort: { fields: frontmatter___episod_no, order: DESC }) {
                nodes {
                    id
                    frontmatter {
                        episod_no
                        title
                        description
                    }
                }
            }
        }
    `)
    let episods = res.allMarkdownRemark.nodes

    return (
        <div>
            <h1>Hi</h1>
            {episods.map(node => (
                <div className="mb-2" key={node.id}>
                    <Episod {...node} />
                </div>
            ))}
        </div>
    )
}

export default Episods
