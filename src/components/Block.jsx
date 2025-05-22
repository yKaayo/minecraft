import { useBox } from "@react-three/cannon";
import { BoxGeometry } from "three";

const Block = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" attach="material" />
    </mesh>
  );
};

export default Block;
