import * as React from 'react';
import {
  Canvas,
  useThree,
  useFrame,
  PerspectiveCameraProps,
} from 'react-three-fiber';
import { PerspectiveCamera } from 'three';

// const Camera = (props: PerspectiveCameraProps) => {
//   const ref = React.useRef<PerspectiveCamera>();
//   const { setDefaultCamera } = useThree();

//   React.useEffect(() => {
//     if (ref.current) setDefaultCamera(ref.current);
//   }, [setDefaultCamera]);
//   useFrame(() => (ref.current ? ref.current.updateMatrixWorld() : null));

//   return <perspectiveCamera ref={ref} {...props} />;
// };

const Game = (props: any) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <Camera /> */}
      {props.children}
    </Canvas>
  );
};

export default Game;
