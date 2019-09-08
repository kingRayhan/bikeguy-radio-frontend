import React from 'react'

const Header = ({ title, description, bg, audio }) => {
    return (
        <div className="episod-header" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 hfull d-flex align-items-center">
                        <div className="content">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        {/* <audio style={{ width: '100%' }} src={audio} controls autoPlay></audio> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
