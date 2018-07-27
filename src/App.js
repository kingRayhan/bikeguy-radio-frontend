import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Hero from './Hero'
import Episods from './Episods'
import LoaderAnimation from './LoaderAnimation'

export default class App extends Component {

    componentDidMount() {
        axios.get('https://api.bikeguybd.com/api/episods')
            .then(({ data: { data: episods } }) => {
                this.setState({ episods, selectedEpisod: episods[0], loading: false })

                const { params: { episod } } = this.props.match
                if (episod) {
                    const episod_no = parseInt(episod, 10)
                    this.changeEpisod(episod_no)
                }

            })
    }

    state = {
        episods: [],
        selectedEpisod: null,
        loading: true
    }

    changeRouter = (episod_no) => {
        this.props.history.push(`/episods/${episod_no}`)
    }

    changeEpisod = (episod_no) => {
        const episod = this.state.episods.find(ep => ep.episod_no === episod_no)

        if (episod)
            this.setState({ selectedEpisod: episod })
    }

    render() {
        return (
            <Fragment>
                <Hero selectedEpisod={this.state.selectedEpisod} />
                {!this.state.loading ?
                    <Episods
                        episods={this.state.episods}
                        changeEpisod={this.changeEpisod}
                        changeRouter={this.changeRouter}
                        selectedEpisod={this.state.selectedEpisod}
                    /> : <LoaderAnimation />}
            </Fragment>
        )
    }
}