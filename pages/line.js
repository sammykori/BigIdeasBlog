
import { useEffect } from 'react';
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
// import * as dat from 'dat.gui'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
import { Scene } from 'three';


export default function Home(){

    let loaded = false;

    useEffect(()=>{
        if(!loaded){
          loaded = true;
          
          //Debug GUI controls tool
          // const gui = new GUI()

          //Canvas or container
			    const container = document.getElementById( 'container' );
          let renderer, scene, camera, stats, line;
      
            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            container.appendChild( renderer.domElement );
            
      
            stats = new Stats();
            // container.appendChild( stats.dom );
      
            scene = new THREE.Scene();
      
            camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 500 );
            camera.position.set(0, 0, 100);
            camera.lookAt(0,0,0)
      
            
      
            //Material
            const material = new THREE.LineBasicMaterial()
            material.color = new THREE.Color(0x0000ff)
      
            //Line
            const points = [];
            points.push(new THREE.Vector3(-10, 0, 0));
            points.push(new THREE.Vector3(0, 10, 0));
            points.push(new THREE.Vector3(10, 0, 0));
            points.push(new THREE.Vector3(0, -10, 0));

            //Object geometry
            const geometry = new THREE.BufferGeometry().setFromPoints(points)
            
            line = new THREE.Line(geometry, material);
            scene.add(line)
      
            //Lights
            const pointLight = new THREE.PointLight(0xffffff, 0.1)
            pointLight.position.x = 2
            pointLight.position.y = 3
            pointLight.position.z = 4
      
            // const geometry = new THREE.BufferGeometry();
            // geometry.setFromPoints( [ new THREE.Vector3(), new THREE.Vector3() ] );
      
            // line = new THREE.Line( geometry, new THREE.LineBasicMaterial() );
            // // scene.add( line );
          
      

            function animate() {
              requestAnimationFrame( animate );
              line.rotation.x += 0.01;
              line.rotation.y += 0.01;    
              renderer.render( scene, camera );
            }

            if ( WebGL.isWebGLAvailable() ) {

              // Initiate function or other initializations here
              animate();
            
            } else {
            
              const warning = WebGL.getWebGLErrorMessage();
              container.appendChild( warning );
            
            }
     
        }

    }, [])

    
    

    return(
        <div className={`w-full min-h-screen`}>
            <div id="container"></div>
            <div id="info" className='absolute z-20 text-white top-0'>Descripstion</div>
        </div>
        

    )
}