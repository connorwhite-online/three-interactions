import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import { Perf } from 'r3f-perf';
// import { useControls } from 'leva';

// component imports
import Sphere from './Sphere.js';

export default function App() { 

  return (
    <div className="App">
      <Canvas>
        <OrbitControls autoRotate autoRotateSpeed={.75}/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere />
        < Sparkles 
          count={50}
          size={2}
          scale={[10, 10, 10]}
          speed={.25}
        />
        <Perf position="top-left" />
      </Canvas>
    </div>
  );
}
