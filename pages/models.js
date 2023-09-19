
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

            let renderer, scene, camera, stats, mesh;
      
            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            container.appendChild( renderer.domElement );
            
      
            stats = new Stats();
            // container.appendChild( stats.dom );
      
            //Scene
            scene = new THREE.Scene();
      
            //Camera
            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000 );
            camera.position.setZ(30)
            scene.add(camera)
      
           
      
            // obit control
            const controls = new OrbitControls( camera, renderer.domElement );
            controls.minDistance = 2;
            controls.maxDistance = 10;
            controls.target.set( 0, 0, - 0.2 );
            controls.update();

            window.addEventListener( 'resize', onWindowResize );

			

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );


			}

            //Light

            const light = new THREE.AmbientLight( 0xffffff ); // soft white light
            scene.add( light );


            //Helpers
            const grid = new THREE.GridHelper(200, 100)
            scene.add(grid)
      
            //Models
            const loader = new GLTFLoader();

            loader.load( '/desktop/scene.gltf', function ( gltf ) {
                mesh = gltf.scene

                scene.add( mesh );

            }, undefined, function ( error ) {

                console.error( error );

            } );


            let lastScrollTop = 0;
            function scrollBody(){
                const scrollPoint = window.pageYOffset || document.body.scrollTop;
                if(mesh){
                    if (scrollPoint > lastScrollTop) {
                        // downscroll code
                        mesh.rotation.y += scrollPoint * -0.0001;
                     } else if (scrollPoint < lastScrollTop) {
                        // upscroll code
                        mesh.rotation.y += scrollPoint * 0.0001;
                     } // else was horizontal scroll
                     lastScrollTop = scrollPoint <= 0 ? 0 : scrollPoint;
                    // mesh.rotation.y += scrollPoint * -0.0005;
                    // mesh.rotation.y += scrollPoint * 0.0005;
                }
                console.log(scrollPoint);
            }
            document.body.onscroll = scrollBody


          
      

            function animate() {
              requestAnimationFrame( animate );
            //   if(mesh){
            //     mesh.rotation.y += 0.01;
            //   }
          
            // console.log(mesh);
              renderer.render( scene, camera );
            }

            if ( WebGL.isWebGLAvailable()) {

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
            <div id="container" className='fixed'></div>
            <main className='absolute w-1/3 flex flex-col top-0 left-0 z-20 space-y-10 text-white'>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
                <p> asdf gsfgs agaggd a dgasd adfa  asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa asdf gsfgs agaggd a dgasd adfa</p>
            </main>
        </div>
        

    )
}