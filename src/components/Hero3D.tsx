import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingChart = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Box ref={meshRef} position={position} args={[1.5, 0.1, 1]} scale={0.8}>
        <meshStandardMaterial 
          color="#10b981" 
          transparent 
          opacity={0.6}
          emissive="#10b981"
          emissiveIntensity={0.1}
        />
      </Box>
    </Float>
  );
};

const FloatingOrb = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.3]} scale={0.6}>
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.7}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};

const FloatingTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.3}>
      <Torus ref={meshRef} position={position} args={[0.8, 0.2, 16, 32]} scale={0.5}>
        <meshStandardMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.6}
          emissive="#3b82f6"
          emissiveIntensity={0.1}
        />
      </Torus>
    </Float>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />
        
        {/* Floating Charts */}
        <FloatingChart position={[-4, 2, -2]} />
        <FloatingChart position={[4, -1, -1]} />
        <FloatingChart position={[-2, -3, -3]} />
        
        {/* Floating Orbs */}
        <FloatingOrb position={[-6, 1, -4]} color="#10b981" />
        <FloatingOrb position={[6, -2, -2]} color="#f59e0b" />
        <FloatingOrb position={[3, 3, -5]} color="#ef4444" />
        <FloatingOrb position={[-3, -1, -6]} color="#8b5cf6" />
        
        {/* Floating Torus */}
        <FloatingTorus position={[5, 0, -3]} />
        <FloatingTorus position={[-5, -2, -4]} />
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};