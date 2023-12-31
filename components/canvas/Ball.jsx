import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei'

import CanvasLoader from '@/utils/Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imageUrl.src])
  // console.log(props.imageUrl.src);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight />
      <directionalLight position={[0,0,0.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial color="#fffaeb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0,0,1]} map={decal} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) =>{
  return(
    <Canvas frameloop="demand" gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
        <Ball imageUrl={icon}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas