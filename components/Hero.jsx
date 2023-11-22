import {motion} from 'framer-motion'
import { styles } from '@/utils/styles'
import { AvatarCanvas, ComputersCanvas } from './canvas'
import { slideIn } from '@/utils/motion'
import Script from 'next/script'
import { Inter, Vina_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const vina = Vina_Sans({ subsets: ['latin'], weight: '400'}) 

const Hero = () => {
  const toggleIframe = () =>{
    const ifram = document.getElementById("diframe");
    ifram.classList.toggle('flex')
    ifram.classList.toggle('hidden')
  }
  return (
    <section className='relative w-full mx-auto py-20'>
      <div className=' flex-col md:flex-row flex max-w-7xl mx-auto overflow-hidden relative'>
        <div className={`${styles.paddingX} md:w-1/2  flex flex-row items-start gap-4`}>
          <div>
            <h1 className="font-black lg:text-[40px] sm:text-[30px] xs:text-[30px] text-[30px] lg:leading-[98px] mt-2 text-white">The <span className={`${vina.className}`}>BIG</span><span className='font-normal text-secondary'>IDEAS</span> Blog<span className='text-violet-500'></span></h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[16px] sm:text-[16px] xs:text-[20px] text-[16px]">Get tips and advice on delivering exceptional customer service, engaging and delighting your customers, and building a customer-centric company.</p>
          </div>
        </div>
        <div className='md:w-2/3 md:absolute right-0 h-full'>
        </div>
      </div>
     
    </section>
  )
}

export default Hero