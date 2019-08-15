import React, { Component } from 'react'

export default class LoaderAnimation extends Component {
    render = () =>
        <div className="d-flex justify-content-center align-items-center">
            <div className="lds-dual-ring"></div>
        </div>
}