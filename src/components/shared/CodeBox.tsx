import * as React from 'react';
import { MeshProps, useFrame } from 'react-three-fiber';
import type { Mesh } from 'three';

type CodeBoxProps = {};

const CodeBox = (props: CodeBoxProps) => {
  const mesh = React.useRef<Mesh>();

  return (
    <mesh {...props} ref={mesh}>
      {/* <boxBufferGeometry args={[props.sizeX, props.sizeY, props.sizeZ]} /> */}
    </mesh>
  );
};

export default CodeBox;
