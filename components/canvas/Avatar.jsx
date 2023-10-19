import {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'

import CanvasLoader from '@/utils/Loader'


const Avatar = ({...props}) => {
  const avat = useGLTF('/avatar/avatar-transformed.glb')
  // console.log(nodes);
  // console.log(materials);
  // console.log({...props});
  return (
    <group {...props} dispose={null}>
      <primitive object={avat.scene} position-y={0} rotation-y={0} scale={1.3} />
    </group>
  )
}

useGLTF.preload('/avatar/avatar-transformed.glb')

const AvatarCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[])
  return(
    <Canvas camera={{ position: [2, 0, 12.25], fov: 15 }}>
         <ambientLight intensity={2.25} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
            <Avatar position={[0.025, -0.9, 0]} isMobile={isMobile} />
         </Suspense>
      </Canvas>
  )
}

export default AvatarCanvas