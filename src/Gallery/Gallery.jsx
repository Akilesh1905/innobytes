import React from 'react'
import Contact from '../Contact/Contact.jsx'
import stylesg from '../Gallery/Gallery.module.css'
import img1 from '../Gallery/Assets/1.jpg'
import img3 from '../Gallery/Assets/header.jpg'
import img4 from '../Gallery/Assets/ayodhya.webp'
import img5 from '../Gallery/Assets/baranti.webp'
import img6 from '../Gallery/Assets/mithonDam.webp'
import img7 from '../Gallery/Assets/recep.jpg'


const Gallery = () => {
  return (
    <>
    <h1 className={stylesg.title} id="gallery">Gallery</h1>
      <div className={stylesg.containergallery}>
        
        <div className={stylesg.gallery}>
          <div className={stylesg.column}>
            <div className={stylesg.photo}>
              <img src={img1} alt="image 1" />
            </div>
            
            <div className={stylesg.photo}>
              <img src={img3} alt="image 3" />

            </div>
          </div>
          <div className={stylesg.column}>
            <div className={stylesg.photo}>
              <img src={img4} alt="image 1" />
            </div>
            <div className={stylesg.photo}>
              <img src={img5} alt="image 2" />
            </div>
            <div className={stylesg.photo}>
              <img src={img6} alt="image 3" />

            </div>
          </div>
          <div className={stylesg.column}>
            <div className={stylesg.photo}>
              <img src={img7} alt="image 1" />
            </div>
            
          </div>
        </div>
      </div>

      <Contact />
    </>
  )
}

export default Gallery