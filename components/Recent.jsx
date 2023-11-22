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
    
    <div className='bg-tertiary rounded-2xl p-5 w-full'>
      <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
        <div className='relative w-full'>
          <img src={image.src} alt={name} className="rounded-2xl"  />
          <div className='absolute inset-0 flex justify-end m-3'>
            <div onClick={()=>window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <Image src={github} alt="github" className="w-1/2 h-1/2 object-contain"  />

            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary font-medium text-[14px]'>{description}</p>
        </div>
        <div className='mt-2 flex flex-wrap gap-2'>
          {tags.map((tag, index)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
        </motion.div>
    </div>
  )
}

const Recent = () => {
  return (
    <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`} >
      

      <div className='w-full flex flex-row justify-between'>
        <motion.div>
            <h2 className={`${styles.sectionHeadText} text-6xl`}>Most Recent Post</h2>
        </motion.div>
        <motion.a variants={fadeIn("","",0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        View All Posts
        </motion.a>

      </div>
      <motion.div className='w-full h-1 bg-gradient-to-b from-violet-500 to-transparent'></motion.div>
      <div className='mt-20 grid grid-cols-3 gap-4'>
        {/* {projects.map((project, index)=>(
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))} */}

        <div className='col-span-2'>
            <ProjectCard  index={1} {...projects[0]} />
        </div>
        <div className='col-span-1 grid grid-rows-2'>
            <div className='row-span-1'>
                <ProjectCard  index={2} {...projects[1]} />
            </div>
            <div className='row-span-1'>
                <ProjectCard  index={3} {...projects[2]} />
            </div>
        </div>
      </div>
    </motion.section>


  )
}

export default Recent