import './App.css';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';

function App() {

  const sphere = useRef();

  const wireMe = () => {
    // sphere.current.rotation += [30, 30, 30];
    sphere.current.material.wireframe = !sphere.current.material.wireframe;
  }

  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh 
        ref={sphere}
          scale={1}
          rotation={[15, 15, 15]}
          position={[0, 0, 0]}
          onClick={wireMe}
        >
          <sphereGeometry />
          <meshStandardMaterial color="turquoise"/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
