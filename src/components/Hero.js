import React, { useContext } from 'react'
import SyntaxPlayer from './SyntaxPlayer'
import { AppContext } from '../contexts/AppContextProvider'
// import Player from './Player'

const Hero = () => {
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
        <>
            <div className="hero-area flex-wrap d-flex align-items-center">
                <div className="bikeguy-radio w-100">
                    <h2 className="bg-logo">BikeGuy</h2>
                    <h2 className="radio-logo">Radio</h2>
                    <h1 className="tagline w-100 text-white">Share your story</h1>
                </div>
            </div>
            {episod.title && <SyntaxPlayer show={show} />}
        </>
    )
}
export default Hero
