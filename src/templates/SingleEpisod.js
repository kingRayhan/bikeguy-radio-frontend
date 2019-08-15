import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { AppContext } from '../contexts/AppContextProvider'

const SingleEpisod = props => {
    let { episod, setEpisod } = useContext(AppContext)

    useEffect(() => {
        setEpisod({
            episod_no: props.data.markdownRemark.frontmatter.episod_no,
            title: props.data.markdownRemark.frontmatter.title,
            audio_url: props.data.markdownRemark.fields.audio_url,
        })
    }, [])

    return (
        <Layout>
            <h1>Hello</h1>
        </Layout>
    )
}

export default SingleEpisod

export const query = graphql`
    query($episod_no: Int!) {
        markdownRemark(frontmatter: { episod_no: { eq: $episod_no } }) {
            frontmatter {
                title
                episod_no
                description
            }
            fields {
                audio_url
            }
            html
        }
    }
`
