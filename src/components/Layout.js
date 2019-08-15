import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContextProvider'
import SyntaxPlayer from './SyntaxPlayer'

const Layout = ({ children }) => {
    let { episod } = useContext(AppContext)

    if (episod.title) {
        var show = {
            number: episod.episod_no,
            displayNumber: episod.episod_no,
            title: episod.title,
            url: episod.audio_url,
        }
    }

    return (
        <>
            {children}
            {episod.title && <SyntaxPlayer show={show} />}
        </>
    )
}

export default Layout
