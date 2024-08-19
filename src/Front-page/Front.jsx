import React from 'react'
import style from "../Front-page/Front.module.css"
import image from '../assets/react.svg'
import { motion } from 'framer-motion'
import About from '../Aboutus/About'
const Front = () => {
  const clickevent = () => {

  }
  return (
    <>


      <motion.div className={style.container1}>
        <header className={style.left}>
          <img src={image} alt="logo" />
          <h3>King<span className={style.span}>sukh</span></h3>
        </header>
        <header className={style.center}>
          <h4 className={style.h4}>Home</h4>
          <h4>About</h4>
          <h4>Services</h4>
          <h4>Rooms</h4>
          <h4>Gallery</h4>
          <h4>Contact</h4>
        </header>
        <header className={style.right}>
          <motion.button onClick={clickevent}
            whileHover={{
              rotate: "2deg"
            }}
            whileTap={{
              rotate: "-2deg"
            }}>Book Now</motion.button>
        </header>
      </motion.div>
      <div className={style.container2}>
        <header className={style.welcome}>
          Make Yourself At Home
          In Our Guest House.
          <div>
            <motion.button className={style.book}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                opacity: 0.8
              }}>
              Book Now</motion.button></div>
        </header>
      </div>
      <About />

    </>
  )
}

export default Front