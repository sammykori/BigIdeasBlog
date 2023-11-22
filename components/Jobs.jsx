import {Tilt} from 'react-next-tilt'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '@/utils/styles'
import { github } from '@/public/assets'
import { projects } from '@/constants'
import { textVariant, staggerContainer, fadeIn } from '@/utils/motion'
import Image from 'next/image'

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return(
      <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)} className="flex flex-row space-x-8">
        <div className='relative w-80 h-[230px]'>
          <img src={image.src} alt={name} className="w-full h-full object-cover rounded-2xl"  />
          <div className='absolute inset-0 flex justify-end m-3'>
            <div onClick={()=>window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <Image src={github} alt="github" className="w-1/2 h-1/2 object-contain"  />

            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary font-medium text-[14px]'>{description}</p>
          <div className='mt-2 flex flex-row gap-2'>
            {tags.map((tag, index)=>(
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
            </div>
        </div>
        
    </motion.div>
  )
}

const Jobs = () => {
  return (
    <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`} >
      <motion.div>
        <h2 className={`${styles.sectionHeadText} text-6xl`}>Job Opportunities</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("","",0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        These jobs are recommended to you from reliable recruitment agencies and companies that we have worked with.
        
        </motion.p>

      </div>
      <div className='mt-20 flex flex-col gap-7'>
        {projects.map((project, index)=>(
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.section>


  )
}

export default Jobs