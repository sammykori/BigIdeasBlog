import {motion} from 'framer-motion'
import { styles } from '@/utils/styles'
import { AvatarCanvas, ComputersCanvas } from './canvas'
import { slideIn } from '@/utils/motion'
import Script from 'next/script'


const Hero = () => {
  const toggleIframe = () =>{
    const ifram = document.getElementById("diframe");
    ifram.classList.toggle('flex')
    ifram.classList.toggle('hidden')
  }
  return (
    <section className='relative w-full h-screen mx-auto '>
      <Script src="https://www.onirix.com/webar/ox-devicemotion.min.js"></Script>
      <div id="diframe" className='hidden flex-col justify-center items-center space-y-4 fixed w-full h-screen top-0 left-0 bottom-0 right-0 z-50 max-w-full max-h-full border-none bg-transparent backdrop-blur-xl'>
        <button className='border-2 border-white rounded-full text-white text-2xl w-10 h-10 text-center' onClick={()=>toggleIframe()}>x</button>
        <iframe id="visor" className='w-[80%] h-[80%] border-none block' src="https://studio.onirix.com/projects/874db7c482f947d6aeba59598e052ed0/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5OTk1LCJwcm9qZWN0SWQiOjU4MjYwLCJyb2xlIjozLCJpYXQiOjE2OTcwMzY4ODB9.Vl8dOaIfR7gazaQfS9Zt_CarlXAsuebQsSekDBNFsUo&background=alpha&preview=false&hide_controls=false&ar_button=false" allow="camera;gyroscope;accelerometer;magnetometer;fullscreen;xr-spatial-tracking;geolocation;"></iframe>
      </div>
      <div className='h-full   top-[120px] lg:mt-12 flex-col md:flex-row flex max-w-7xl mx-auto overflow-hidden relative' id='contact'>
        <div className={`${styles.paddingX} md:w-1/2  flex flex-row items-start gap-4`}>
          <div className='flex flex-col justify-center items-center  mt-6 '>
            <div className='w-4 h-4 bg-[#915eff] rounded-full'></div>
            <div className='w-1 h-40 sm:h-80 bg-gradient-to-b from-violet-500 to-transparent'></div>
          </div>
          <div>
            <h1 className="font-black lg:text-[40px] sm:text-[30px] xs:text-[30px] text-[30px] lg:leading-[98px] mt-2 text-white">Hi, I'm Sammy Kori<span className='text-violet-500'></span></h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[16px] sm:text-[16px] xs:text-[20px] text-[16px] lg:leading-[2px]">I develop 3D visuals for web and mobile apps.</p>
            <p className="text-[#dfd9ff] font-medium lg:text-[16px] sm:text-[16px] xs:text-[20px] text-[16px] lg:leading-[2px] lg:mt-8 hidden lg:block">Scan the QR code or click <span className='underline font-bold' onClick={()=>toggleIframe()}>here</span> to view my 3D model in the real world.</p>
            <p className="text-[#dfd9ff] font-medium lg:text-[16px] sm:text-[16px] xs:text-[20px] text-[16px] lg:leading-[2px] lg:hidden">Click <span className='underline font-bold' onClick={()=>toggleIframe()}>here</span> to view my 3D model in the real world.</p>

            <img src='/assets/qr.png' width={150} height={200} alt="ar qr-code" className='rounded-xl mt-10 hidden lg:block' />
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