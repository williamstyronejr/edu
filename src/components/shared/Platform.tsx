import * as React from 'react';
import { MeshProps } from 'react-three-fiber';
import type { Mesh } from 'three';

const Platform = (props: Object) => {
  const mesh = React.useRef<Mesh>();
  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Platform;
