import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContextProvider'

const Episod = props => {
    let { episod, setEpisod } = useContext(AppContext)

    let { episod_no, title } = props.frontmatter
    let { audio_url } = props.fields

    const play = () => {
        let episod = {
            episod_no,
            title,
            audio_url,
        }
        setEpisod(episod)
    }

    let icon = 'play_circle_outline'
    return (
        <div className="episod" onClick={play} style={{ backgroundColor: episod_no === episod.episod_no && '#DDD' }}>
            <div className="play-icon">
                <i className="material-icons">{icon}</i>
            </div>
            <div className="episod-info">
                <p className="episod-no">Episod #{episod_no}</p>
                <h4 className="episod-name">{title}</h4>
                {/* <p className="length">Length: 27:31</p> */}
            </div>
        </div>
    )
}
export default Episod
