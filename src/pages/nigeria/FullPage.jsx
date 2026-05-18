import React from 'react'
import { motion } from 'framer-motion'
import Hero from "./Hero"
import Features from './Features'
import Section1 from './Section1'
import Section2 from './Section2'
const FullPage = () => {
  return (
      <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
      className='min-h-screen  flex flex-col items-center justify-start gap-16 py-10 px-4'
    >
      <Hero />
      <Features />
      <Section1/>
      <Section2/>
    </motion.main>
  )
}

export default FullPage
