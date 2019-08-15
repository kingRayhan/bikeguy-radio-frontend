import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/Hero'
import Episods from '../components/Episods'
import Layout from '../components/Layout'

const Index = () => {
    return (
        <Layout>
            <Link to="/episods/1">Go</Link>
            <Hero />
            <Episods />
        </Layout>
    )
}

export default Index
