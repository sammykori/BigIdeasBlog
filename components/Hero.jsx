import {motion} from 'framer-motion'
import { styles } from '@/utils/styles'
import { AvatarCanvas, ComputersCanvas } from './canvas'
import { slideIn } from '@/utils/motion'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div className='h-full   top-[120px] lg:mt-12 flex-col md:flex-row flex max-w-7xl mx-auto overflow-hidden relative' id='contact'>
        <div className={`${styles.paddingX} md:w-1/2  flex flex-row items-start gap-4`}>
          <div className='flex flex-col justify-center items-center  mt-6 '>
            <div className='w-4 h-4 bg-[#915eff] rounded-full'></div>
            <div className='w-1 h-40 sm:h-80 bg-gradient-to-b from-violet-500 to-transparent'></div>
          </div>
          <div>
            <h1 className="font-black lg:text-[40px] sm:text-[30px] xs:text-[30px] text-[30px] lg:leading-[98px] mt-2 text-white">Hi, I'm Sammy Kori<span className='text-violet-500'></span></h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[16px] sm:text-[16px] xs:text-[20px] text-[16px] lg:leading-[2px]">I develop 3D visuals for web and mobile apps.</p>
          </div>
        </div>
        <div className='md:w-2/3 md:absolute right-0 h-full'>
          <AvatarCanvas />
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className='absolute xs:bottom-10 bottom-4 w-full justify-center items-center hidden md:flex'>
        <a href='#about' className='w-8 h-12 rounded-3xl border-4 border-white flex justify-center items-start p-2'>
          <motion.dev animate={{y: [0,24,0]}} transition={{duration:1.5, repeat: Infinity, repeatType: 'loop'}} className="w-3 h-3 rounded-full bg-white mb-1"  />
        </a>
      </div>
    </section>
  )
}

export default Hero