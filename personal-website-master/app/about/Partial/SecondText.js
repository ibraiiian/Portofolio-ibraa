'use client'
import React from 'react'
import { motion } from 'framer-motion'

const SecondText = () => {
  return (
    <div>
      <motion.h2
            className="lg:text-2xl text-xl font-pop mt-5 dark:text-white text-black"
            initial={{
              opacity: 0,
              translateY: 100,
            }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: {
                type: "spring",
                duration: 2,
                stiffness: 100,
                delay: 0.3,
              },
            }}
          >
            Hi, my name is Ibrahim Bahaly I am a front-end web developer, i’m 18 years
            old. I got a bachelor of Information System at STMIK IKMI CIRBON
            (2024-2027),
            <br /> My journey in the world of web development has led me to
            specialize in Front end development technologies, with a strong foundation in
            React.js and a commitment to creating exceptional user experiences. <br />
            In the realm of frontend development, I have honed my skills in
            building dynamic responsive and user-friendly interfaces using react.js
            I am passionate about turning ideas into seamless and interactive digital 
            experiences, whether it’s crafting visually appealing designs, optimizing website 
            performance, or ensuring accessibility for all users. I strive to stay updated with 
            the latest trends and best practices to deliver solutions that are not only efficient 
            but also engaging and user-focused.
          </motion.h2>
    </div>
  )
}

export default SecondText
