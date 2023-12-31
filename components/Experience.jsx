import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '@/utils/styles'
import { experiences } from '@/constants'
import { textVariant, staggerContainer } from '@/utils/motion'

const ExperienceCard = ({experience}) =>{
  // console.log(experience.icon);
  return(
    <VerticalTimelineElement contentStyle={{
      background: '#1d1836',
      color: '#fff'

    }}
    contentArrowStyle={{
      borderRight:'7px solid #232631',
      }}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon.src} alt={experience.company_name} className="object-contain w-[60%] h-[60%]" />
        </div>
      }>
      <div>
        <h3 className='font-bold text-white '>
            {experience.title}
        </h3>
        <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index)=>(
          <li key={`experience-point-${index}`} className="text-white text-[14px] pl-1 tracking-wider">{point}</li>
        ))}
      </ul>

    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`} >
      <motion.div id="work">
      <p className={`${styles.sectionSubText} uppercase`} id="about">What have I done so far</p>
      <h2 className={`${styles.sectionHeadText} text-6xl`}>Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            experiences.map((experience, index)=>(
            <ExperienceCard key={index} experience={experience} />
            ))
          }
        </VerticalTimeline>
      </div>
    </motion.section>
  )
}

export default Experience