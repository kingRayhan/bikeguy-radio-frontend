import React, { Component, Fragment } from 'react'
export default class Episod extends Component {


    changeEP = () => {
        this.props.changeEpisod(this.props.episod.episod_no)
        this.props.changeRouter(this.props.episod.episod_no)
    }

    render() {

        const { topic, episod_no } = this.props.episod
        let icon = 'play_circle_outline'
        const player = document.querySelector('#mainAudioPlayer')

        const style = {}

        if (this.props.selectedEpisod.episod_no === episod_no) {
            icon = 'check_circle'
            style.backgroundColor = '#f1f1f1'
        }

        return (
            <Fragment>
                <div className="episod" onClick={this.changeEP} style={style}>
                    <div className="play-icon">
                        <i className="material-icons">{icon}</i>
                    </div>
                    <div className="episod-info">
                        <p className="episod-no">
                            Episod #{episod_no}
                        </p>
                        <h4 className="episod-name">{topic}</h4>
                        <p className="length">Length: 27:31</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}
