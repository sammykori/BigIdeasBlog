import {Tilt} from 'react-next-tilt'
import {motion} from 'framer-motion'
import { styles } from '@/utils/styles'
import { services } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'
// import Tilt from 'react-tilt'
import { staggerContainer } from '@/utils/motion'

const ServiceCard = ({index, title, icon}) =>{
  // console.log(icon);
  return(
    <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-md shadow-lg">
          <div options = {{max:45, scale:1, speed:450}} className="bg-tertiary rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon.src} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`} >
     <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`} id="about">Introduction</p>
      <h2 className={`${styles.sectionHeadText} text-6xl`}>Overview</h2>
     </motion.div>
     <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-white max-w-3xl leading-snug">
     I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
     </motion.p>

     <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
     </div>
    </motion.section>
  )
}

export default About