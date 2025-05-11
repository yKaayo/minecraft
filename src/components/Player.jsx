import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useRef } from "react";
import { Vector3 } from "three";
import useKeyboard from "../hooks/useKeyboard";

const JUMP_HEIGHT = 2.7;
const GROUND_HEIGHT = 1.175;
const SPEED = 3;

const Player = () => {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    useKeyboard();

  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, GROUND_HEIGHT, 0],
  }));

  // Position
  const pos = useRef([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
  }, [api.position]);

  // Velocity
  const vel = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2]),
    );

    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0),
    );

    const sideVector = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, vel.current[1], direction.z);

    if (jump && Math.abs(vel.current[1]) < 0.025) {
      api.velocity.set(vel.current[0], JUMP_HEIGHT, vel.current[2]);
    }
  });

  return <mesh ref={ref}></mesh>;
};

export default Player;
