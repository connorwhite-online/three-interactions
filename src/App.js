import './App.css';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';

function App() {

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
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
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
          <meshStandardMaterial wireframe color="turquoise"/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
