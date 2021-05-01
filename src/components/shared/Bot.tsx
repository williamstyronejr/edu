import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshProps, useFrame, useLoader } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei';

const FallBack = () => <div>loading</div>;
function ErrorFallBack() {
  return <div>error occurred</div>;
}

const Bot = (props: { defaultPosition: { x: Number; y: Number } }) => {
  const scene = useGLTF('../../models/scene.gltf');
  if (scene) console.log(scene);

  // console.log(scene);
  return (
    <React.Suspense fallback={<FallBack />}>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <>
          {/* <group>
        <mesh visible geometry={nodes.Default}>
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.3}
            />
        </mesh>
      </group> */}
        </>
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Bot;
