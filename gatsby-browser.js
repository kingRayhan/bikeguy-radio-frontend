import './styles/app.scss'
import './styles/player.styl'

import React from 'react'
import AppContextProvider from './src/contexts/AppContextProvider'

export const wrapRootElement = props => {
    console.log(props)
    return <AppContextProvider>{props.element}</AppContextProvider>
}
