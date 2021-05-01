import * as React from 'react';
import { MeshProps, useFrame } from 'react-three-fiber';
import { Mesh } from 'three';

type PlatformProps = {
  color: string;
  sizeX: number;
  sizeY: number;
  sizeZ: number;
};

const Platform = (props: PlatformProps) => {
  const mesh = React.useRef<Mesh>();

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry args={[props.sizeX, props.sizeY, props.sizeZ]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export default Platform;
