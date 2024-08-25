import React from 'react'
import stylfo from '../Footer/Footer.module.css'
import location from '../Contact/assets/location.png'
import mail from '../Contact/assets/mail.png'
import call from '../Contact/assets/call.png'
const Footer = () => {
    return (
        <>
            <div className={stylfo.container}>

                <div className={stylfo.left}>
                    <h1>Kingsukh Guest House</h1>
                    <p className={stylfo.para}>Discover a world of comfort,
                        luxury, and adventure as you
                        explore our curated selection
                        of hotels, making every moment
                        of your getaway truly extraordinary.</p>
                </div>

                <div className={stylfo.center}>
                    <h1>Quick Links</h1>
                    <p>Browse Destinations</p>
                    <p>Special Offers & Packages</p>
                   <p> Room Types & Amenities</p>
                   <p>  Customer Reviews & Ratings</p> 
                   <p> Travel Tips & Guides</p>

            </div>

            <div className={stylfo.right}>
                    <h1>OUR SERVICES</h1>
                    <p>Concierge Assistance
                    </p>
                    <p> Flexible Booking Options</p>
                    <p> Airport Transfers</p>
                    <p> Wellness & Recreation</p>
            </div>

            <div className={stylfo.last}>
                <h1>CONTACT US</h1>
                <a
							href="https://www.google.com/maps/place/Kingsukh+Guest+House/
                            @23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb
                            :0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F1
                            1srygxjp6?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                            target='_blank'>
							<img src={location}
								alt="location" /> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a>
						<br /><br /><br />
						<a href="mailto:kkghosh0099@gmail.com"> <img src={mail} alt="mail" />
							kkghosh0099@gmail.com</a>
						<br /><br /><br />



						<a href="https://api.whatsapp.com/send?phone=919007062180" target='_blank'> <img src={call} alt="call" /> +91 9007062180</a>
                       
            </div>
            
        </div >
        <div>
        <h4>Copyright © 2024 Kingsukh Guest House. All rights reserved.</h4>

           </div>
    </>

  )
}

export default Footer