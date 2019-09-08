import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Episod from './Episod'

const Episods = () => {
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
        <>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section-title">Latest Episods</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {episods.map(node => (
                        <div className="col-md-4 col-sm-6" key={node.id}>
                            <Episod {...node} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Episods
