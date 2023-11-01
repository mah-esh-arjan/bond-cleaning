import React from 'react';
import second from './img/second.jpg'
import './CSS/second.css';
import { motion } from 'framer-motion'

export const bottomVariants = {
    hidden: {
        y: 200,
        overflow: "hidden",
    },
    visible: {
        y: 0,
        opacity: 1,
        overflow: "visible",
        transition: {
            type: "spring",
            stiffness: "40",
            velocity: "1",
        },
    },
};

export const leftVariants = {
    hidden: {
        x: -200,
        overflow: "hidden",
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: "40",
            velocity: "1",
        },
    },
};


const Second = () => {
    return (
        <div className="second-container container ">
            <div className="row">
                <motion.div className="cleaner col-lg-6 col-12" initial="hidden" whileHover={{ scale: 1.05, transition: { duration: 1 }, }} viewport={{ once: true }} whileInView={'visible'} variants={leftVariants}>
                    <img src={second} alt="second" />
                </motion.div>
                <div className="vertical-text col-lg-1 d-lg-block d-none">
                    <h1>Cleanliness Reigns Supreme</h1>
                </div>
                <div className="text-overlay1 col-lg-5 col-12">
                    <h1 className="overlay1-heading">Experience the Magic of Immaculate Spaces with Our Bond Cleaning!</h1>
                    <p className="overlay1-paragraph">
                        At our dedicated cleaning service, we specialize in a select range of meticulous and
                        comprehensive cleaning solutions tailored to meet your unique needs. Our services encompass the art of creating immaculate
                        spaces, ensuring a seamless transition for our valued customers. Our core offerings include:
                        Our expertise in bond cleaning ensures a pristine environment, guaranteeing the return of your deposit.
                        We meticulously restore spaces to their original state, leaving no room for stress during the inspection.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Second;