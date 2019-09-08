import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import { AppContext } from '../contexts/AppContextProvider'
import Header from '../components/singleEpisod/Header'
import Episods from '../components/singleEpisod/Episods'

const SingleEpisod = props => {
    let { setEpisod } = useContext(AppContext)

    // useEffect(() => {
    //     setEpisod({
    //         episod_no: props.data.markdownRemark.frontmatter.episod_no,
    //         title: props.data.markdownRemark.frontmatter.title,
    //         audio: props.data.markdownRemark.frontmatter.audio,
    //     })
    // }, [])

    return (
        <div>
            <Header
                title={props.data.markdownRemark.frontmatter.title}
                description={props.data.markdownRemark.frontmatter.description}
                bg={props.data.markdownRemark.frontmatter.thumbnail}
            />

            <div className="episod-body">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h5 className="pb-2 font-quicksand text-primary">Previous Episods</h5>
                            <Episods />
                        </div>
                        <div className="col-md-7">
                            <div className="episod-contents">
                                <h3 className="font-quicksand">{props.data.markdownRemark.frontmatter.title}</h3>

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: props.data.markdownRemark.html,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-3">
                                <h5>Host</h5>
                                <p>Omar Faruk</p>
                            </div>
                            <div>
                                <h5>Guest</h5>
                                <p>King Rayhan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                thumbnail
                audio
            }
            html
        }
    }
`
