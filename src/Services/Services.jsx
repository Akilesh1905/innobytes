import React from 'react'
import styless from '../Services/Services.module.css'
import { motion } from 'framer-motion'
import Rooms from '../Rooms/Rooms.jsx'
const Services = () => {
    return (
        <>
            <div className={styless.container} id='service'>

                <div className={styless.left}>

                </div>

                <div className={styless.right}>
                    <h1 className={styless.imagetext} >
                        services provided
                    </h1>
                    <div className={styless.boxes}>

                        <motion.div
                        >
                            <motion.h4 whileHover={{
                                rotate: "1deg",

                            }}>High Class Security</motion.h4>
                            <motion.h4
                                whileHover={{
                                    rotate: "-1deg",

                                }}>24 Hours Room Service</motion.h4>
                            <motion.h4
                                whileHover={{
                                    rotate: "1deg",

                                }}>Restaurant</motion.h4>
                            <motion.h4
                                whileHover={{
                                    rotate: "-1deg",

                                }}>Tourist Guide Support</motion.h4>
                        </motion.div>

                    </div>
                </div>
            </div>
            <div className={styless.container2}>
                <div className={styless.innercontainer}>
                    <div className={styless.div1}>
                        <h4>100+</h4>
                        <p>Booking completed</p>
                    </div>
                    <div className={styless.div2}>
                        <h4>150+</h4> <p>Happy customers</p>

                    </div>
                </div>
            </div>

            <Rooms/>
        </>
    )
}

export default Services