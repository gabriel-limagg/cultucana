import React, { useRef } from 'react';
import '../App.css';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

function FloatingMesh({ geometry }) {
  const meshRef = useRef();
  
  const floatSpeed = 0.003; // Velocidade reduzida (mais lento)
  const floatAmplitude = 0.3; // Aumentar a amplitude para um movimento mais visível

  // Animação de flutuação
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(Date.now() * floatSpeed) * floatAmplitude + 1.5; // Flutuação com elevação
    }
  });

  return (
    <mesh 
      ref={meshRef}
      geometry={geometry}
      position={[-2.1, 0, -1]} // Posiciona o objeto inicialmente no centro
      scale={[0.015, 0.015, 0.015]} // Aumenta o objeto um pouco mais
      rotation={[-1.3, 0, 0]} // Rotaciona o objeto no eixo X
    >
      <meshStandardMaterial color='gray' />
    </mesh>
  );
}

function Inicio() {
  // Carrega o arquivo STL
  const geometry = useLoader(STLLoader, '/espatalho.stl');

  return (
    <div className='px-4 md:px-8 h-screen'>
      <h1 className='font-RedRose md:pt-56 text-textColor text-4xl md:text-7xl text-center md:-mt-40'>
        CULTUCANA
      </h1>
      <div className="relative w-full h-full z-10">
        <Canvas style={{ height: '100%' }}>
          {/* Luzes */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[8, 2, 9]} />

          {/* Renderizar o modelo STL */}
          <FloatingMesh geometry={geometry} />
        </Canvas>
      </div>
    </div>
  );
}

export default Inicio;