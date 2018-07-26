import React, { Component, Fragment } from 'react'


export default class Player extends Component {

    state = {
        playIcon: 'play_circle_outline',
        duration: '00:00',
        currentTime: '00:00',
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

    scrub = e => {
        console.log(e)
    }


    render() {

        const { topic, episod_no, audio } = this.props.episod

        return (
            <Fragment>


                <audio
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
                        <div className="audio-progressbar-wrapper" ref="pWrapper" onClick={this.scrub}>
                            <div className="audio-progress" ref="progressbar"></div>
                        </div>
                        <div className="audio-duration">
                            <span className="current-time">{this.state.currentTime}</span>
                            &nbsp;/&nbsp;
                            <span className="total-time">{this.state.duration}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
