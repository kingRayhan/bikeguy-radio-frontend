import React, { createContext, useState } from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    let [episod, setEpisod] = useState({
        episod_no: null,
        title: null,
        audio_url: null,
    })

    return <AppContext.Provider value={{ episod, setEpisod }}>{children}</AppContext.Provider>
}

export default AppContextProvider
