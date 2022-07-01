import { CssBaseline } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import NavbarHome from '../components/NavbarHome'
import { makeStyles } from '@mui/styles'
import bkgd from '../assets/hero.jpg'
import HomeSplit from '../components/HomeSplit'

const useStyles = makeStyles((theme) =>({
  root:{
    minHeight: '100vh',
    backgroundImage: `url(${bkgd})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

}));

const Home = () => {
  const classes =useStyles();
  return (
    <div className={classes.root}>
    <CssBaseline/>
      <NavbarHome />
      <HomeSplit/>
      <Footer />
     
    </div>
  )
}

export default Home