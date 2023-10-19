import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'

import CanvasLoader from '@/utils/Loader'


const Avatar = ({...props}) => {
  const avat = useGLTF('/avatar/avatar-transformed.glb')
  console.log(avat);
  // console.log(materials);
  // console.log({...props});
  return (
    <group {...props} dispose={null}>
      <primitive object={avat.scene} position-y={0} rotation-y={0}/>
    </group>
  )
}

useGLTF.preload('/avatar/avatar-transformed.glb')

const AvatarCanvas = () => {
  return(
    <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: '#111a21',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
            <Avatar position={[0.025, -0.9, 0]}/>
         </Suspense>
      </Canvas>
  )
}

export default AvatarCanvas