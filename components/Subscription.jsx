import {Tilt} from 'react-next-tilt'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '@/utils/styles'
import { github } from '@/public/assets'
import { projects } from '@/constants'
import { textVariant, staggerContainer, fadeIn } from '@/utils/motion'
import Image from 'next/image'


const Subscription = () => {
  return (
    <div className='bg-secondary w-full py-20 my-12'>
        <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`} >
        

        <div className='w-full flex flex-row flex-wrap'>
            <div className='lg:basis-1/2 mb-10'>
                <motion.div>
                    <h2 className={`${styles.sectionHeadText} text-[30px] leading-6 lg:text-[50px] lg:leading-10 text-black`}>Get our best content in your inbox</h2>
                </motion.div>
                <p className="mt-3 text-gray-600 text-[20px] pr-12 max-w-3xl leading-[30px]">
                    All the tips, stories, and resources you could ever need or want — straight to your email!
                </p>
            </div>
            <div className='lg:basis-1/2'>
                <motion.div>
                    <form className=''>
                        <div className='flex flex-row space-x-4 bg-white justify-between rounded-lg text-2xl'>
                            <input type="email" placeholder='Email Adress' className='bg-white text-gray-600 rounded-lg p-2 px-4 w-40 lg:w-80' />
                            <button className='bg-violet-900 text-white rounded-r-lg p-2 px-4 font-bold'>Subscribe</button>
                        </div>
                        
                    </form>
                    <p className='mt-4 text-gray-600'>Your privacy matters! Help Scout only uses this info to send content and updates. You may unsubscribe anytime. View our privacy policy for more.</p>
                </motion.div>
            </div>
            

        </div>
        

        
        </motion.section>
    </div>
    


  )
}

export default Subscription