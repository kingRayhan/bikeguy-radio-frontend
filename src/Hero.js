import React, { Component, Fragment } from 'react'
import Player from './Player'

export default class Hero extends Component {
	render() {
		return (
			<Fragment>
				<div className="hero-area flex-wrap d-flex align-items-center">
					<div className="bikeguy-radio w-100">
						<h2 className="bg-logo">BikeGuy</h2>
						<h2 className="radio-logo">Radio</h2>
						<h1 className="tagline w-100 text-white">Share your story</h1>
					</div>
				</div>
				<div className="player-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								{this.props.selectedEpisod ? <Player episod={this.props.selectedEpisod} /> : null}
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
