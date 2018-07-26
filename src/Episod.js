import React, { Component, Fragment } from 'react'
export default class Episod extends Component {


    changeEP = () => {
        this.props.changeEpisod(this.props.episod.episod_no)
        this.props.changeRouter(this.props.episod.episod_no)
    }

    render() {

        const { topic, episod_no } = this.props.episod

        return (
            <Fragment>
                <div className="episod" onClick={this.changeEP}>
                    <div className="play-icon">
                        <i className="material-icons">play_circle_outline</i>
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
