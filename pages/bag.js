
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
          let renderer, scene, camera, stats, sphere;
      
            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            container.appendChild( renderer.domElement );
            
      
            stats = new Stats();
            // container.appendChild( stats.dom );
      
            scene = new THREE.Scene();
      
            camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
            camera.position.z = 5;
      
            // const controls = new OrbitControls( camera, renderer.domElement );
            // controls.minDistance = 50;
            // controls.maxDistance = 200;
      
            // scene.add( new THREE.AmbientLight( 0x443333 ) );
      
            // const dirLight1 = new THREE.DirectionalLight( 0xffddcc, 1 );
            // dirLight1.position.set( 1, 0.75, 0.5 );
            // scene.add( dirLight1 );
      
            // const dirLight2 = new THREE.DirectionalLight( 0xccccff, 1 );
            // dirLight2.position.set( - 1, 0.75, - 0.5 );
            // scene.add( dirLight2 );
      
            //Object geometry
            const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 )
      
            //Material
            const material = new THREE.MeshBasicMaterial()
            material.color = new THREE.Color(0xff0000)
      
            //Mesh
            sphere = new THREE.Mesh(geometry, material)
            scene.add(sphere)
      
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
              sphere.rotation.x += 0.01;
              sphere.rotation.y += 0.01;    
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
        </div>
        

    )
}