import {Suspense, useState, useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Points, PointMaterial, Preload} from '@react-three/drei'

// import * as random from 'maath/random/dist/maath-random.esm'


const Stars = () => {
  const starsRef = useRef()

  // const sphere = random.inSphere(new Float32Array(5000), {radius: 1.2})

  useFrame((state, delta) =>{
    starsRef.current.rotation.x -= delta/10;
    starsRef.current.rotation.y -= delta/15;
  })

  return (
    <group rotation={[0,0, Math.PI/4]}>
      <Points ref={starsRef} stride={3} frustumCulled>
        <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation={true} depthWrite={false}  />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{position:[0,0,1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}


export default StarsCanvas