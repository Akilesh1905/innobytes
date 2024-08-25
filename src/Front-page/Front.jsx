import React from 'react'
import stylef from "../Front-page/Front.module.css"
import { motion } from 'framer-motion'
import About from '../Aboutus/About'
const Front = () => {
  return (
    <>


      <motion.div id="home" className={stylef.container1}>
        <header className={stylef.left}>
          {/* <img src={image} alt="logo" className={stylef.logo}/> */}
          <h3 className={stylef.brand}>King<span className={stylef.span}>sukh</span></h3>
        </header>
        <header className={stylef.center}>
          <a className={stylef.h4} href="#home">Home</a>
          <a href="#abt">About</a>
          <a href="#service">Services</a>
          <a href="#room">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </header>
        <header className={stylef.right}>

          <a href="https://api.whatsapp.com/send?phone=919007062180" target='_blank'> <motion.button
            whileHover={{
              rotate: "2deg"
            }}
            whileTap={{
              rotate: "-2deg"
            }}>Book Now</motion.button> </a>
        </header>
      </motion.div>
      <div className={stylef.container2}>
        <header className={stylef.welcome}>
          Make Yourself At Home
          In Our Guest House.
          <div>
            <a href="https://api.whatsapp.com/send?phone=919007062180" target='_blank'>
              <motion.button className={stylef.book}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  opacity: 0.6
                }}>
                Book Now</motion.button> </a>
          </div>
        </header>
      </div>
      <About />

    </>
  )
}

export default Front