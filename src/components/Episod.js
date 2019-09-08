import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Episod = props => {
    let { episod_no, title } = props.frontmatter
    let icon = 'play_circle_outline'
    return (
        <AniLink cover bg="#775273" hex="#775273" to={`/episods/${episod_no}`}>
            <div className="episod">
                <div className="play-icon">
                    <i className="material-icons">{icon}</i>
                </div>
                <div className="episod-info">
                    <p className="episod-no">Episod #{episod_no}</p>
                    <h4 className="episod-name">{title}</h4>
                    {/* <p className="length">Length: 27:31</p> */}
                </div>
            </div>
        </AniLink>
    )
}
export default Episod
