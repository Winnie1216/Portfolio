import React, { Suspense, useEffect, useState } from "react";
import { HackerRoom } from "../components/HackerRoom";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";

import { AnimatedCube } from "../components/AnimatedCube";
import { useWindowSize } from "../hooks/useWindows";
import Dog from "../components/Dog";
import CheeseMoon from "../components/CheeseMoon";
import Cube from "../components/Cube";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowSize();

  useEffect(() => {
    setIsMobile(width <= 768);
  }, [width]);

  let scale, position, groupScale, groupPosition;

  if (width <= 480) {
    scale = 0.04;
    position = [1, -3, 2];
    groupScale = 1;
    groupPosition = [-3, 4, 0];
  } else if (width <= 600) {
    scale = 0.05;
    position = [1, -3.5, 2];
    groupScale = 1;
    groupPosition = [-4, 4, 0];
  } else if (width <= 914) {
    scale = 0.06;
    position = [1, -4, 2];
    groupScale = 1;
    groupPosition = [-6, 7.5, 0];
  } else if (width <= 995) {
    scale = 0.065;
    position = [1, -4.5, 2];
    groupScale = 1.3;
    groupPosition = [-10, 5, 0];
  } else {
    scale = 0.07;
    position = [1, -5, 2];
    groupScale = 1.5;
    groupPosition = [-11, 5, 0];
  }

  const dogParams =
    width <= 435
      ? { scale: 1.5, pos: [2.5, 3.5, 1] }
      : width <= 600
      ? { scale: 1.5, pos: [4, 3.5, 1] }
      : width <= 770
      ? { scale: 1.5, pos: [6, 3, 1] }
      : { scale: 2.5, pos: [8, 2, 1] };

  const moonParams =
    width <= 332
      ? {
          pos: [-2, -4, 0],
        }
      : width <= 530
      ? { scale: 0.4, pos: [-3, -4, 0] }
      : width <= 825
      ? { scale: 0.5, pos: [-5, -3, 0] }
      : { scale: 0.5, pos: [-9, -3, 0] };

  const cubeParams =
    width <= 485
      ? { scale: 0.7, pos: [-4, -6, 0] }
      : width <= 550
      ? { scale: 0.7, pos: [-2, -6, 0] }
      : width <= 694
      ? { scale: 0.8, pos: [-1, -2.5, 0] }
      : width <= 785
      ? { scale: 1, pos: [-2, -5.5, 0] }
      : width <= 810
      ? { pos: [-1, -5.5, 0] }
      : { scale: 1, pos: [0, -5.5, 0] };

  <group position={dogParams.pos} scale={dogParams.scale}>
    <Dog />
  </group>;
  return (
    <section
      className="relative min-h-screen mx-auto flex flex-col mt-12"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col  mt-10 c-space gap-3">
        <p className="text-3xl text-white  xl:text-4xl ">
          Hi, I'm Winnie{" "}
          <span className="waving-hand  xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-white">
            👋
          </span>
        </p>
        <p className="hero_tag text-gray-400">Building Products & Brands</p>
      </div>

      <div className="absolute min-h-screen w-full flex inset-0">
        <Canvas className="w-full h-full">
          {/* <Leva/> */}
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault
              position={[0, 0, 20]}
              near={1}
              far={500}
            ></PerspectiveCamera>

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={scale}
                position={position}
                rotation={[0.2, 330, 0]}
              />
            </HeroCamera>
            <group
              position={groupPosition}
              rotation={[-5, 1, -0.5]}
              scale={groupScale}
            >
              <AnimatedCube />
            </group>
            <group position={dogParams.pos} scale={dogParams.scale}>
              <Dog />
            </group>
            <group
              position={moonParams.pos}
              scale={moonParams.scale}
              rotation={[0, 0.2, 0.4]}
            >
              <CheeseMoon />
            </group>
            <group
              position={cubeParams.pos}
              scale={cubeParams.scale}
              rotation={[0, 0.2, 0.4]}
            >
              <Cube />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-1 left-0 right-0 w-ful z-10 px-5 sm:px-10">
        <a href="#contact">
          <Button
            name={"Lets Work Together"}
            isBeam
            containerClass={
              "bg-gray-700/50 flex items-center px-3 h-[50px] justify-center sm:w-[300px] md:w-[400px] lg:w-[500px] "
            }
          />
        </a> 
      </div>
    </section>
  );
};

export default Hero;
