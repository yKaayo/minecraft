import { usePlane } from "@react-three/cannon";

// Texture
import { mossTexture } from "./Texture";
import { NearestFilter, RepeatWrapping } from "three";

const Ground = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0]}));

  // Repeating the texture
  mossTexture.magFilter = NearestFilter
  mossTexture.wrapS = RepeatWrapping;
  mossTexture.wrapT = RepeatWrapping;
  mossTexture.repeat.set(200, 200);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} attach="geometry" />
      <meshStandardMaterial attach="material" map={mossTexture} />
    </mesh>
  );
};

export default Ground;
