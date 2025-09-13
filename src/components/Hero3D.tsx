import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Box, Cylinder } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AIRobotHead = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    // Glowing eye effect
    if (eyeLeftRef.current && eyeRightRef.current) {
      const intensity = 0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      (eyeLeftRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
      (eyeRightRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      {/* Main Head - More humanoid shape */}
      <Sphere ref={meshRef} position={position} args={[1.8, 32, 32]} scale={[1, 1.1, 0.9]}>
        <meshStandardMaterial 
          color="#b8bcc8" 
          metalness={0.9}
          roughness={0.1}
          emissive="#6366f1"
          emissiveIntensity={0.05}
        />
      </Sphere>
      
      {/* Face Panel - Metallic overlay */}
      <Box position={[position[0] - 0.8, position[1], position[2] + 1.2]} args={[0.8, 1.8, 0.1]} scale={1}>
        <meshStandardMaterial 
          color="#f3f4f6" 
          metalness={0.95}
          roughness={0.05}
          emissive="#8b5cf6"
          emissiveIntensity={0.02}
        />
      </Box>
      
      {/* Glowing Eyes - Orange like in reference */}
      <Sphere ref={eyeLeftRef} position={[position[0] - 0.3, position[1] + 0.3, position[2] + 1.3]} args={[0.15]} scale={1}>
        <meshStandardMaterial 
          color="#f97316" 
          emissive="#f97316"
          emissiveIntensity={0.8}
        />
      </Sphere>
      <Sphere ref={eyeRightRef} position={[position[0] + 0.3, position[1] + 0.3, position[2] + 1.3]} args={[0.15]} scale={1}>
        <meshStandardMaterial 
          color="#f97316" 
          emissive="#f97316"
          emissiveIntensity={0.8}
        />
      </Sphere>
      
      {/* Side Panel Details */}
      <Cylinder position={[position[0] + 1.2, position[1] - 0.2, position[2]]} args={[0.4, 0.4, 0.3]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial 
          color="#374151" 
          metalness={0.8}
          roughness={0.2}
          emissive="#3b82f6"
          emissiveIntensity={0.1}
        />
      </Cylinder>
    </Float>
  );
};

const AIRobotTorso = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const chestRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
    if (chestRef.current) {
      (chestRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 
        0.1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.1}>
      {/* Neck */}
      <Cylinder position={[position[0], position[1] + 1.8, position[2]]} args={[0.4, 0.4, 1]} scale={1}>
        <meshStandardMaterial 
          color="#9ca3af" 
          metalness={0.9}
          roughness={0.1}
          emissive="#6366f1"
          emissiveIntensity={0.03}
        />
      </Cylinder>
      
      {/* Main Torso */}
      <Box ref={meshRef} position={position} args={[2.2, 2.8, 1.2]} scale={1}>
        <meshStandardMaterial 
          color="#d1d5db" 
          metalness={0.85}
          roughness={0.15}
          emissive="#8b5cf6"
          emissiveIntensity={0.02}
        />
      </Box>
      
      {/* Chest Core */}
      <Sphere ref={chestRef} position={[position[0], position[1] + 0.2, position[2] + 0.6]} args={[0.6]} scale={1}>
        <meshStandardMaterial 
          color="#1f2937" 
          metalness={0.95}
          roughness={0.05}
          emissive="#f97316"
          emissiveIntensity={0.1}
        />
      </Sphere>
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
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#f97316" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
        <pointLight position={[0, 15, 8]} intensity={0.6} color="#ffffff" />
        <spotLight position={[0, 10, 15]} intensity={1.5} color="#f97316" angle={0.3} penumbra={0.5} />
        
        {/* Sophisticated AI Robot */}
        <AIRobotHead position={[0, 1.5, 0]} />
        <AIRobotTorso position={[0, -1, 0]} />
        <RobotArm position={[-1.8, -0.5, 0]} />
        <RobotArm position={[1.8, -0.5, 0]} />
        
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