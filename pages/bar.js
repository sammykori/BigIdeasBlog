import {Suspense} from 'react'
import * as THREE from 'three';
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'
import { styles } from "@/utils/styles"
import { useState, useEffect } from 'react'
import { easing } from 'maath'

import CanvasLoader from '@/utils/Loader'
import { color } from 'framer-motion';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

const Bar = ({taps, underlight, area, setError, rings, led, ...props}) => {

  const bar1 = useGLTF('/models/bar-small.glb')
  const bar2 = useGLTF('/models/bar-big.glb')

  const [bar, setBar] = useState('bar1')

  console.log(bar2);
  console.log(rings);
//   console.log(taps.on, taps.number);
//   console.log({...props});

  useEffect(()=>{
    console.log("area changed");
    if(area.width < 500 && area.breadth < 500){
        setBar('')
    }else if(area.width > 699 && area.breadth > 699){
        setBar('bar2')
    }else if(area.width > 499 && area.breadth > 499){
        setBar('bar1')
    }
  }, [area])

  

  useFrame((state, delta) => {
    for(const obj in bar1.nodes){
        if(!taps.on){
            bar1.nodes.TuborgFont.visible = false;
            bar1.nodes.TuborgFont001.visible = false;
            bar1.nodes.TuborgFont002.visible = false;
        }else{
            bar1.nodes.TuborgFont.visible = true;
            bar1.nodes.TuborgFont001.visible = true;
            bar1.nodes.TuborgFont002.visible = true;

            switch (taps.number) {
                case '1':
                    bar1.nodes.TuborgFont.visible = false;
                    bar1.nodes.TuborgFont001.visible = true;
                    bar1.nodes.TuborgFont002.visible = false;
                    break;
                case '2':
                    bar1.nodes.TuborgFont.visible = true;
                    bar1.nodes.TuborgFont001.visible = false;
                    bar1.nodes.TuborgFont002.visible = true;
                    break;
                case '3':
                    bar1.nodes.TuborgFont.visible = true;
                    bar1.nodes.TuborgFont001.visible = true;
                    bar1.nodes.TuborgFont002.visible = true;
                    break;
            
                default:
                    break;
            }
        }
        
        if(!underlight.on){
            bar1.nodes.Curve015_2.material.emissive = new THREE.Color('black')
        }else{
            bar1.nodes.Curve015_2.material.emissive = new THREE.Color(underlight.color)
        }
    }
    for(const obj in bar2.nodes){
        if(!rings){
            bar2.nodes.Rings035.visible = false;
        }else{
            bar2.nodes.Rings035.visible  = true;

        }
        
        if(!underlight.on){
            bar2.nodes.Underlights.material.emissive = new THREE.Color('black')
        }else{
            bar2.nodes.Underlights.material.emissive = new THREE.Color(underlight.color)
        }

        if(!underlight.on){
            bar2.nodes.Underlights.material.emissive = new THREE.Color('black')
        }else{
            bar2.nodes.Underlights.material.emissive = new THREE.Color(underlight.color)
        }

        if(!led){
            bar2.nodes.Cylinder013_2.material.emissive = new THREE.Color('black')
        }else{
            bar2.nodes.Cylinder013_2.material.emissive = new THREE.Color('white')
        }
    }
    
   
    })


    
  return (
    <>
        {bar==='bar1'?
            <group {...props} dispose={null}>
                <primitive object={bar1.scene} position-y={0} rotation-y={0} scale={1.3}/>
            </group>
            : bar === 'bar2'?
            <group {...props} dispose={null}>
                <primitive object={bar2.scene} position-y={0} rotation-y={0} scale={1.3}/>
            </group>: ''
        }
    </>
    
    
  )
}

useGLTF.preload('/models/bar-small.glb')
useGLTF.preload('/models/bar-big.glb')









const BarCanvas = () => {
        const [isMobile, setIsMobile] = useState(false);
        const [taps, setTaps] = useState({on: true, number: 3});
        const [underlight, setUnderLight] = useState({on: true, color: 'white'});
        const [area, setArea] = useState({width: 500, breadth: 500})
        const [rings, setRings] = useState(true);
        const [led, setLed] = useState(true);
    
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

      function generatePDF(){
        const canvas =  document.getElementsByTagName("canvas")[0]
        // const image = canvas.toDataURL("image/png");
        // const a = document.createElement("a");
        // a.href = image.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download="image.png"
        // a.click();
        html2canvas(canvas).then(canvasImage => {
            const pdf = new jsPDF();
                        
            // Calculate the aspect ratio for the PDF image
            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = canvasImage.height * (imgWidth / canvasImage.width);
            
            // Add the canvas image to the PDF
            pdf.addImage(canvasImage, 'PNG', 0, 0, imgWidth, imgHeight);
            
            // Download the PDF
            pdf.save('canvas_to_pdf.pdf');
        })
      }
  return(
    <div className='relative z-0 bg-primary min-h-screen text-white space-y-20'>
            <div className='w-full h-screen bg-hero bg-no-repeat bg-cover bg-center grid grid-cols-1 lg:grid-cols-2'>
                <div className="w-full flex flex-col justify-center items-center">
                    <h1>Festival Bar Builder</h1>
                    <form className='flex flex-col justify-center items-start space-y-4'>
                    <div>
                            <div>
                            <label>Width</label>
                                <input type="number" value={area.width} onChange={(e)=>setArea({width:e.target.value, breadth:area.breadth})} required/>
                            </div>
                            
                            <div>
                                <label>breadth</label>
                                <input type="number" value={area.breadth} onChange={(e)=>setArea({width: area.width, breadth: e.target.value})} required/>
                            </div>
                        </div>
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
                        <div>
                            <div>
                                <label >Rings</label>
                                <input type="checkbox"  checked={rings} onChange={(e)=>setRings(!rings)} />
                            </div>

                        </div>
                        <div>
                            <div>
                                <label >LED Screen</label>
                                <input type="checkbox"  checked={led} onChange={(e)=>setLed(!led)} />
                            </div>

                        </div>
                        <div className='flex flex-row space-x-2 justify-center items-end'>
                            <button className='py-1 px-4 bg-blue-500 text-white' onClick={()=>generatePDF()}>Print</button>
                            <p className='text-xs'>Please adjust model in desired position before you print.</p>
                        </div>
                        
                    </form>
                    
                    
                </div>
                <div className=''>
                    <Canvas
                        camera={{ position: [2, 0, 12.25], fov: 40 }}
                        gl={{ preserveDrawingBuffer: true }}
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
                            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={2} minPolarAngle={1} />
                            <Bar position={[0.025, -0.9, 0]} taps={taps} underlight={underlight} area={area} rings={rings} led={led} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    
  )
}

export default BarCanvas