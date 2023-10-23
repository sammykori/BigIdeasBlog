import {useState, useRef} from 'react'
import { styles } from '@/utils/styles'
import { EarthCanvas } from './canvas'
import { slideIn, staggerContainer } from '@/utils/motion'
import {motion} from 'framer-motion'

const Contact = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  
  const [loading, setLoading] = useState(false)


  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await fetch("/api/sendMail", {
      method: "POST",
      body: JSON.stringify(
        {
          name,
          email,
          message
        }
      ),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    const result = await response.json()
    console.log(result);
  }

  return (
    <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`} >
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden' id='contact'>
        <motion.div variants={slideIn("left", "tween", "0.2", 1)} className="flex-[0.75] bg-black p-8 rounded-2xl">
          <p className={`${styles.sectionSubText}`} id="about">Get in touch</p>
          <h2 className={`${styles.sectionHeadText} text-6xl`}>Contact</h2>
          <form onSubmit={handleSubmit} className='flex flex-col mt-12 gap-8'>
            <label className='flex flex-col'><span className='text-white font-medium mb-4'>Your Name</span></label>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="What's your name" className='rounded-lg outline-none border-none font-medium bg-tertiary py-4 px-6'/>
            <label className='flex flex-col'><span className='text-white font-medium mb-4'>Your Email</span></label>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="What's your email" className='rounded-lg outline-none border-none font-medium bg-tertiary py-4 px-6'/>
            <label className='flex flex-col'><span className='text-white font-medium mb-4'>Your Message</span></label>
            <textarea rows={7}  name="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="What do you want to say" className='rounded-lg outline-none border-none font-medium bg-tertiary py-4 px-6'/>
            <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-md shadow-primary rounded-xl'>Send</button>
          </form>
        </motion.div>
        <motion.div variants={slideIn("right", "tween", "0.2", 1)}  className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas/>
        </motion.div>
      </div>
    </motion.section>
    
  )
}

export default Contact