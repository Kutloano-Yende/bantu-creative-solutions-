'use client';

import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PresentationControls, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const MODEL_PATH = '/models/lion.glb';

/* Brand gold material applied to every mesh so the lion reads as a premium
   gold sculpture regardless of the source model's textures. */
const GOLD = new THREE.MeshStandardMaterial({
  color: '#C89B3C',
  metalness: 0.85,
  roughness: 0.32,
  emissive: '#3a2a0a',
  emissiveIntensity: 0.15,
});

const TARGET_SIZE = 2.6; // world units for the lion's largest dimension

function Lion() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  // Apply gold finish + center & scale the model to fit the frame (runs once).
  const { offset, scale } = useMemo(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.material = GOLD;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });

    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return { offset: center.clone().multiplyScalar(-1), scale: TARGET_SIZE / maxDim };
  }, [scene]);

  // Gentle continuous auto-rotation.
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.4;
  });

  return (
    <group ref={group} dispose={null} scale={scale}>
      <primitive object={scene} position={[offset.x, offset.y, offset.z]} />
    </group>
  );
}

export default function LionScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.5, 4.5], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      {/* Warm key + cool fill so the gold has dimension without an HDR fetch */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[4, 6, 5]}
        intensity={2.4}
        color="#fff4d6"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-5, 2, -4]} intensity={0.8} color="#cfe0ff" />
      <pointLight position={[0, -2, 3]} intensity={1.2} color="#C89B3C" />

      <Suspense fallback={null}>
        <PresentationControls
          global
          cursor
          snap
          speed={1.2}
          polar={[-0.3, 0.3]}
          azimuth={[-0.6, 0.6]}
        >
          <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5}>
            <Lion />
          </Float>
        </PresentationControls>

        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.35}
          scale={8}
          blur={2.6}
          far={3}
          color="#7a5a18"
        />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(MODEL_PATH);
