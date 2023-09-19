import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Edges, MeshPortalMaterial, CameraControls, Environment, PivotControls } from '@react-three/drei'
import { About, Contact, Experience, Feedbacks, Hero, Loader, Navbar, StarsCanvas, Tech, Works } from '@/components'

export default function Port () {
    return(
        <div className='relative z-0 bg-primary min-h-screen text-white space-y-20'>
            <div className='bg-hero bg-no-repeat bg-cover bg-center '>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            
            <div className='relative z-0 pb-24'>
            <Contact />
            <StarsCanvas />
            </div>
        </div>
        
    )
  
}

