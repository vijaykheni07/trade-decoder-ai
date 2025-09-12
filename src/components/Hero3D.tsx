import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Box, Cylinder } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RobotHead = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <Box ref={meshRef} position={position} args={[2, 2.2, 1.8]} scale={1}>
        <meshStandardMaterial 
          color="#e5e7eb" 
          metalness={0.8}
          roughness={0.2}
          emissive="#3b82f6"
          emissiveIntensity={0.1}
        />
      </Box>
      {/* Robot Eyes */}
      <Sphere position={[position[0] - 0.4, position[1] + 0.3, position[2] + 0.9]} args={[0.2]} scale={1}>
        <meshStandardMaterial 
          color="#10b981" 
          emissive="#10b981"
          emissiveIntensity={0.8}
        />
      </Sphere>
      <Sphere position={[position[0] + 0.4, position[1] + 0.3, position[2] + 0.9]} args={[0.2]} scale={1}>
        <meshStandardMaterial 
          color="#10b981" 
          emissive="#10b981"
          emissiveIntensity={0.8}
        />
      </Sphere>
    </Float>
  );
};

const RobotBody = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <Box ref={meshRef} position={position} args={[2.5, 3, 1.5]} scale={1}>
        <meshStandardMaterial 
          color="#f3f4f6" 
          metalness={0.7}
          roughness={0.3}
          emissive="#6366f1"
          emissiveIntensity={0.05}
        />
      </Box>
      {/* Chest Panel */}
      <Box position={[position[0], position[1], position[2] + 0.76]} args={[1.5, 2, 0.1]} scale={1}>
        <meshStandardMaterial 
          color="#1f2937" 
          metalness={0.9}
          roughness={0.1}
          emissive="#10b981"
          emissiveIntensity={0.2}
        />
      </Box>
    </Float>
  );
};

const RobotArm = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.1}>
      <Cylinder ref={meshRef} position={position} args={[0.3, 0.3, 2.5]} scale={1}>
        <meshStandardMaterial 
          color="#d1d5db" 
          metalness={0.8}
          roughness={0.2}
          emissive="#3b82f6"
          emissiveIntensity={0.1}
        />
      </Cylinder>
    </Float>
  );
};

const DataOrb = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.4]} scale={0.8}>
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.4}
        wireframe={true}
      />
    </Sphere>
  );
};


export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[0, 10, 5]} intensity={0.3} color="#ffffff" />
        
        {/* Main AI Robot */}
        <RobotHead position={[0, 1, 0]} />
        <RobotBody position={[0, -1.5, 0]} />
        <RobotArm position={[-2, 0, 0]} />
        <RobotArm position={[2, 0, 0]} />
        
        {/* Data Orbs around Robot */}
        <DataOrb position={[-4, 2, -3]} color="#10b981" />
        <DataOrb position={[4, -1, -2]} color="#3b82f6" />
        <DataOrb position={[-3, -2, -4]} color="#f59e0b" />
        <DataOrb position={[3, 3, -3]} color="#8b5cf6" />
        <DataOrb position={[-5, 0, -5]} color="#ef4444" />
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};