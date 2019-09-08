import React, { useContext } from 'react'

import SyntaxPlayer from './SyntaxPlayer'
import { AppContext } from '../contexts/AppContextProvider'

const PlayerWrapper = () => {
    let { episod } = useContext(AppContext)

    if (episod.title) {
        var show = {
            number: episod.episod_no,
            displayNumber: episod.episod_no,
            title: episod.title,
            url: episod.audio_url,
        }
    }

    return (
        <div style={{ display: episod.title ? 'block' : 'none' }}>
            <SyntaxPlayer show={show} />
        </div>
    )
}

export default PlayerWrapper
