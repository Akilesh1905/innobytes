import React from 'react'
import stylec from '../Contact/Contact.module.css'
import location from '../Contact/assets/location.png'
import mail from '../Contact/assets/mail.png'
import call from '../Contact/assets/call.png'
import Footer from '../Footer/Footer.jsx'
const Contact = () => {
	return (
		<>
			<h1 className={stylec.title} id='contact'>Contact Us</h1>
			<div className={stylec.container}>

				<div className={stylec.left}>
					<div className={stylec.cont}>
						<h2 style={{
							color: "rgba(0, 0, 0, 0.679)"
						}}>
							Contact Info
						</h2>


						<a
							href="https://www.google.com/maps/place/Kingsukh+Guest+House
							/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb
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
				</div>


				<div className={stylec.right}>
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3656.5042923747733!2d86.8597371!3d23.5862406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1724515395812!5m2!1sen!2sin"
						width="800"
						height="450"
						style={{
							border: "0px",
							borderRadius: "8px"
						}}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade">

					</iframe>

				</div>

			</div>


			<Footer />
		</>
	)
}

export default Contact		