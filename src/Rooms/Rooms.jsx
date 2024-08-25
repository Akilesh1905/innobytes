import React from 'react'
import stylesr from '../Rooms/Room.module.css'
import img1 from '../Rooms/small.jpg'
import img2 from '../Rooms/Room1.jpg'
import {motion} from 'framer-motion'
import Gallery from '../Gallery/Gallery.jsx'
const Rooms = () => {
  return (
    <>
      
      <header id='room'> 
        <p className={stylesr.header}>
          OUR LIVING ROOM 
          </p>
        <h1>The Most Memorable Rest
           Time Starts Here.
           </h1>
      </header>

      <div 
      className={stylesr.container }>
        

        <motion.div whileHover={{
        scale:"1.01",
      }}
        className={stylesr.card}>
          <div>
            <img src={img1} alt="Room1" className={stylesr.image} />
          </div>

          <div className={stylesr.content}>
            <h2 className={stylesr.title}>Cozy Haven Room</h2>
            <p className={stylesr.description}>
              Escape to comfort in our Cozy Haven Room,
              a snug retreat designed for intimate relaxation.
              Starting from
            </p>
            <p className={stylesr.rate}>Rs. 1000/night</p>
            <a href="https://api.whatsapp.com/send?phone=919007062180" target='_blank' >
            <button>BookNow</button> </a>
          </div>
        </motion.div>


        <motion.div whileHover={{
        scale:"1.01"
      }}
         className={stylesr.card}>
          <div>
            <img src={img2} alt="Room1" className={stylesr.image} />
          </div>

          <div className={stylesr.content}>
            <h2 className={stylesr.title}>Spacious Serenity Suite</h2>
            <p className={stylesr.description}>
            Indulge in luxury and ample space in our 
            Spacious Serenity Suite, where tranquility
             meets roomy elegance
            </p>
            <p className={stylesr.rate}>Rs. 1500/night</p>
            <a href="https://api.whatsapp.com/send?phone=919007062180" target='_blank'>
            <button>BookNow</button> </a>

          </div>
        </motion.div>

      </div>
        <Gallery/>
    </>
  )
}

export default Rooms