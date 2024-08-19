import React from 'react'
import style from '../Aboutus/About.module.css'
import img from '../Aboutus/out.jpg'
import Services from '../Services/Services'
const About = () => {
  return (
    <>
      <div className={style.about}>
        <div className={style.para}>
          <h1>About US</h1>
          <h1 style={{
            fontFamily: "Roboto"
          }}>
            THE BEST HOLIDAYS STARTS HERE!</h1>
          <p style={{
            width: "480px",
            lineHeight: "1.6em",
            fontSize: "1.05rem",
          }}>
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure 
            of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam,
             Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful
              meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious
               blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating 
               memories that linger long after your stay.
          </p>
          <a href="https://www.google.com/maps/place/Kingsukh+Guest+House
          /@23.5866261,86.8600289,19.94z/data=!4m14!1m7!3m6!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!2sKingsukh+Guest+House
          !8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!
          16s%2Fg%2F11srygxjp6?entry=ttu"
           target="_blank" style={{
            width: "380px",
            color: "blue",
            textDecoration: "none"
          }}>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
            Contact us: +91 9007062180</a>

        </div>
        <div className={style.image}>
          <img src={img} alt="hotel entrance image" className={style.image1} />
        </div>
      </div>
      <Services/>
    </>

  )
}

export default About