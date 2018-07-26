import React, { Component, Fragment } from 'react'
import Episod from './Episod'

export default class Episods extends Component {

    render() {
        return (
            <Fragment>
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <h2 className="section-title">Latest Episods</h2>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {this.props.episods.map((episod, i) => (
                            <div
                                className="col-md-4 col-sm-6"
                                key={i}
                            >
                                <Episod
                                    episod={episod}
                                    changeRouter={this.props.changeRouter}
                                    changeEpisod={this.props.changeEpisod} />
                            </div>
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    }
}
