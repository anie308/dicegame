import React from 'react'
import Hero from '../components/Home/Hero'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'

function Home() {
    return (
        <div className='h-screen flex items-start justify-start relative bg-image'>
            <div className=" absolute top-0 h-full w-full opacity-50 bg-black" />
            <div className='absolute top-0 z-20 w-full h-full'>
                <Navbar />
                <Hero />
                <Footer />
            </div>
        </div>
    )
}

export default Home
