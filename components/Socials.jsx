import {Tilt} from 'react-next-tilt'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '@/utils/styles'
import { github } from '@/public/assets'
import { projects } from '@/constants'
import { textVariant, staggerContainer, fadeIn } from '@/utils/motion'
import Image from 'next/image'


const Socials = () => {
  return (
    <div className='bg-violet-500 w-full py-20 my-12'>
        <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`} >
        

        <div className='w-full flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <motion.div>
                    <h2 className={`${styles.sectionHeadText} text-[50px] leading-10 text-primary text-center`}>Follow all our socials for daily updates and insightful information</h2>
                </motion.div>
            </div>
            <div className='w-1/2'>
                <motion.div>
                    <div className="flex flex-row">
                        
                    </div>
                    <p className='mt-4 text-white text-center'>Your privacy matters! Help Scout only uses this info to send content and updates. You may unsubscribe anytime. View our privacy policy for more.</p>
                </motion.div>
            </div>
            

        </div>
        

        
        </motion.section>
    </div>
    


  )
}

export default Socials