import { BallCanvas } from "./canvas"
import { technologies } from "@/constants"
import {motion} from 'framer-motion'
import { staggerContainer } from "@/utils/motion"
import { styles } from "@/utils/styles"

const Tech = () => {
  return (
    <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`} >
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech, index)=>(
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>

        ))}

      </div>
    </motion.section>
  )
}

export default Tech