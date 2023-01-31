import React, {useRef} from "react";
import {Bloom} from '@react-three/postprocessing';
// import { useControls } from "leva";

export default function Sphere() {

// create a ref to the sphere
  const sphere = useRef();

  const hover = () => {
    // sphere.current.rotation += [30, 30, 30];
    sphere.current.material.wireframe = !sphere.current.material.wireframe;
    console.log('hover event');
  }

  const grow = () => {
    sphere.current.scale.x += .1;
    sphere.current.scale.y += .1;
    sphere.current.scale.z += .1;
    console.log('grow event');
  }

  const shrink = () => {
    sphere.current.scale.x -= .1;
    sphere.current.scale.y -= .1;
    sphere.current.scale.z -= .1;
    console.log('shrink event');
  }

    return (
        <mesh 
            ref={sphere}
            scale={[1, 1, 1]}
            rotation={[15, 15, 15]}
            position={[0, 0, 0]}
            onPointerEnter={hover}
            onPointerLeave={hover}
            onPointerDown={grow}
            onPointerUp={shrink}
        >
            <sphereGeometry />
            <meshStandardMaterial wireframe metalness={1} color="orange" emissive="orange" emissiveIntensity={20}/>
            <Bloom miniMapBlur />
        </mesh>
    )

}
