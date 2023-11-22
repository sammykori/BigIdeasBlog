import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Edges, MeshPortalMaterial, CameraControls, Environment, PivotControls } from '@react-three/drei'
import { About, Contact, Discover, Experience, Feedbacks, Hero, Loader, Navbar, Recent, Socials, Jobs, StarsCanvas, Subscription, Tech, Works } from '@/components'

export default function Blog () {
    return(
        <div className='relative z-0 bg-primary min-h-screen text-white pt-20'>
            <div className=' '>
                <Navbar />
                <Hero />
            </div>
            <Recent />
            <Subscription />
            <Discover />
            <Socials />
            <Jobs />
            {/* <Footer /> */}
        </div>
        
    )
  
}

