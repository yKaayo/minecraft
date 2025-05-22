import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Ground from "./components/Ground";
import Player from "./components/Player";
import FirstPersonCamera from "./components/FirstPersonCamera";
import Blocks from "./components/Blocks";

const App = () => {
  return (
    <main className="relative flex h-dvh w-full items-center justify-center">
      <Canvas>
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <ambientLight intensity={0.5} />
        <FirstPersonCamera />
        <Physics>
          <Player />
          <Blocks />
          <Ground />
        </Physics>
      </Canvas>

      <p className="absolute text-xl text-white">+</p>
    </main>
  );
};

export default App;
