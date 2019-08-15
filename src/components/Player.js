import React, { useState, createRef, useContext } from 'react'
// import { AppContext } from '../contexts/AppContextProvider'

const progressbar = document.querySelector('#progressbar')
const progress = document.querySelector('.audio-progressbar-wrapper')
const audioPlayer = document.querySelector('#mainAudioPlayer')

let audioPlayerRed = createRef()

const Player = () => {
    console.log(audioPlayer)

    // let { episod } = useContext(AppContext)
    let episod = { title: 'title', episod_no: 5, audio_url: 'https://traffic.libsyn.com/syntax/Syntax170.mp3' }
    const { title, episod_no, audio_url } = episod

    let [icon, setIcon] = useState('play_circle_outline')

    const playOrPause = () => {
        if (audioPlayer.paused) audioPlayer.play()
        else audioPlayer.pause()
    }

    const changeProgress = () => {
        const currentTime = audioPlayer.currentTime
        const duration = audioPlayer.duration

        const size = (currentTime / duration) * 100
        progressbar.style.width = size + '%'
    }

    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * audioPlayer.duration
        audioPlayer.currentTime = scrubTime
    }

    if (progress) {
        progress.addEventListener('click', scrub)
        progress.addEventListener('drag', scrub)
    }

    return (
        <div className="player">
            <audio
                id="mainAudioPlayer"
                style={{ display: 'none' }}
                onTimeUpdate={changeProgress}
                onPlay={() => setIcon('pause_circle_outline')}
                onPause={() => setIcon('play_circle_outline')}
                src={audio_url}
                ref={audioPlayerRed}
            />
            <div className="play-icon" onClick={playOrPause}>
                <i className="material-icons">{icon}</i>
            </div>
            <div className="player-bar">
                <p className="episod-no">Episod #{episod_no}</p>
                <h3 className="audio-name">{title}</h3>
                <div className="audio-progressbar-wrapper" id="pWrapper">
                    <div className="audio-progress" id="progressbar" />
                </div>
                <div className="audio-duration">
                    <span className="current-time">00:00</span>
                    &nbsp;/&nbsp;
                    <span className="total-time">00:00</span>
                </div>
            </div>
        </div>
    )
}

export default Player
