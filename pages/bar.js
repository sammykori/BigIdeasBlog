import {Suspense} from 'react'
import * as THREE from 'three';
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'
import { styles } from "@/utils/styles"
import { useState, useEffect } from 'react'
import { easing } from 'maath'

import CanvasLoader from '@/utils/Loader'
import { color } from 'framer-motion';


const Bar = ({taps, underlight, ...props}) => {
  const avat = useGLTF('/models/bar-small.glb')
  console.log(avat);
  console.log(underlight.on, underlight.color);
  console.log(taps.on, taps.number);
  console.log({...props});

  useFrame((state, delta) => {
    for(const obj in avat.nodes){
        if(!taps.on){
            avat.nodes.TuborgFont.visible = false;
            avat.nodes.TuborgFont001.visible = false;
            avat.nodes.TuborgFont002.visible = false;
        }else{
            avat.nodes.TuborgFont.visible = true;
            avat.nodes.TuborgFont001.visible = true;
            avat.nodes.TuborgFont002.visible = true;

            switch (taps.number) {
                case '1':
                    avat.nodes.TuborgFont.visible = false;
                    avat.nodes.TuborgFont001.visible = true;
                    avat.nodes.TuborgFont002.visible = false;
                    break;
                case '2':
                    avat.nodes.TuborgFont.visible = true;
                    avat.nodes.TuborgFont001.visible = false;
                    avat.nodes.TuborgFont002.visible = true;
                    break;
                case '3':
                    avat.nodes.TuborgFont.visible = true;
                    avat.nodes.TuborgFont001.visible = true;
                    avat.nodes.TuborgFont002.visible = true;
                    break;
            
                default:
                    break;
            }
        }
        
        if(!underlight.on){
            avat.nodes.Curve015_2.material.emissive = new THREE.Color('black')
        }else{
            avat.nodes.Curve015_2.material.emissive = new THREE.Color(underlight.color)
        }
    }
    
   
    })
    
  return (
    <group {...props} dispose={null}>
      <primitive object={avat.scene} position-y={0} rotation-y={0} scale={1.3}/>
    </group>
  )
}

useGLTF.preload('/models/bar-small.glb')









const BarCanvas = () => {
        const [isMobile, setIsMobile] = useState(false);
        const [taps, setTaps] = useState({on: true, number: 3});
        const [underlight, setUnderLight] = useState({on: true, color: 'white'});
    
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
    <div className='relative z-0 bg-primary min-h-screen text-white space-y-20'>
            <div className='w-full h-screen bg-hero bg-no-repeat bg-cover bg-center grid grid-cols-1 lg:grid-cols-2'>
                <div className="w-full flex flex-col justify-center items-center">
                    <h1>Festival Bar Builder</h1>
                    <form className='flex flex-col justify-center items-start space-y-4'>
                        <div>
                            <div>
                                <label >Taps</label>
                                <input type="checkbox" checked={taps.on} onChange={(e)=>setTaps({on: !taps.on, number: taps.number})} />
                            </div>
                            
                            <div>
                                <label>Number per module</label>
                                <input type="number" value={taps.number} onChange={(e)=>setTaps({on: taps.on, number:e.target.value})} min={1} max={3} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label >UnderLight</label>
                                <input type="checkbox"  checked={underlight.on} onChange={(e)=>setUnderLight({on: !underlight.on, color: underlight.color})} />
                            </div>
                            
                            <div>
                                <label>Color</label>
                                <input type="radio" name="color" className='accent-white' value={underlight.color} onChange={(e)=>setUnderLight({on: underlight.on, color:'white'})} />
                                <label htmlFor='white'>White</label>
                                <input type="radio" name="color" className='accent-green-600' value={underlight.color} onChange={(e)=>setUnderLight({on: underlight.on, color:'green'})} />
                                <label htmlFor='green'>Green</label>
                                <input type="radio" name="color" className='accent-blue-600' value={underlight.color} onChange={(e)=>setUnderLight({on: underlight.on, color:'blue'})} />
                                <label htmlFor='blue'>Blue</label>
                            </div>
                        </div>
                        
                    </form>
                    
                </div>
                <div className=''>
                    <Canvas
                        camera={{ position: [2, 0, 12.25], fov: 40 }}
                        // style={{
                        //     backgroundColor: 'transparent',
                        //     width: '50vw',
                        //     height: '50vh',
                        // }}
                    >
                        <ambientLight intensity={1.25} />
                        <ambientLight intensity={0.1} />
                        <directionalLight intensity={0.4} />
                        <Suspense fallback={CanvasLoader}>
                            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI} minPolarAngle={Math.PI/2} />
                            <Bar position={[0.025, -0.9, 0]} taps={taps} underlight={underlight} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    
  )
}

export default BarCanvas