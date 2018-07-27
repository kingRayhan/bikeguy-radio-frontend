import React, { Component, Fragment } from 'react'


export default class Player extends Component {

    state = {
        playIcon: 'play_circle_outline'
    }

    playOrPause = () => {
        const { audioPlayer } = this.refs

        if (audioPlayer.paused)
            audioPlayer.play()
        else
            audioPlayer.pause()
    }

    changeProgress = () => {
        const currentTime = this.refs.audioPlayer.currentTime
        const duration = this.refs.audioPlayer.duration

        const size = (currentTime / duration) * 100
        this.refs.progressbar.style.width = size + '%'
    }

    render() {

        const { topic, episod_no, audio } = this.props.episod


        const progress = document.querySelector('.audio-progressbar-wrapper')

        const audioPlayer = this.refs.audioPlayer


        function scrub(e) {
            const scrubTime = (e.offsetX / progress.offsetWidth) * audioPlayer.duration
            audioPlayer.currentTime = scrubTime
        }

        if (progress) {
            progress.addEventListener('click', scrub)
            progress.addEventListener('drag', scrub)
        }




        return (
            <Fragment>
                <audio
                    id="mainAudioPlayer"
                    ref="audioPlayer"
                    style={{ display: 'none' }}
                    onTimeUpdate={this.changeProgress}
                    onPlay={() => this.setState({ playIcon: 'pause_circle_outline' })}
                    onPause={() => this.setState({ playIcon: 'play_circle_outline' })}
                    src={audio}></audio>
                <div className="player">
                    <div className="play-icon" onClick={this.playOrPause}>
                        <i className="material-icons">{this.state.playIcon}</i>
                    </div>
                    <div className="player-bar">
                        <p className="episod-no">
                            Episod #{episod_no}
                        </p>
                        <h3 className="audio-name">
                            {topic}
                        </h3>
                        <div className="audio-progressbar-wrapper" ref="pWrapper">
                            <div className="audio-progress" ref="progressbar"></div>
                        </div>
                        <div className="audio-duration">
                            <span className="current-time">00:00</span>
                            &nbsp;/&nbsp;
                            <span className="total-time">00:00</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
