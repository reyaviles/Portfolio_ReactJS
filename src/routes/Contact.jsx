import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
    <Navbar />
    <Hero2 heading= "Contact Me" text= "Let's chat." />
    <Form/>
    <Footer />
    </div>
  )
}

export default Contact