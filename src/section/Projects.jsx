
import { myProjects } from "../constants/index.js";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import CanvasLoader from '../components/CanvasLoader.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const projectCount = myProjects.length;

  const handleNav = (direction) => {
    setSelectedIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentPro = myProjects[selectedIndex];

  return (
    <section className="p-[16px] my-20 w-full">
      <p className="head-text text-left">My Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 w-full gap-10">
        <div className="grid-cols-1">
          <div className="relative flex flex-col gap-5 px-5 sm:p-10 py-10 shadow-2xl shadow-gray-800 rounded-2xl ">
            <div className="absolute top-0 right-0">
              <img
                src={currentPro.spotlight}
                alt="spolight"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg "
              style={currentPro.logoStyle}
            >
              <img
                src={currentPro.logo}
                alt="logo"
                className="w-10 h-10 shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <p className="grid-headtext text-left">{currentPro.title}</p>
              <p className="grid-subtext text-left my-5">{currentPro.desc}</p>
              <p className="grid-subtext text-left ">{currentPro.subdesc}</p>
            </div>
            <div className="flex gap-5 justify-between flex-wrap">
              <div className="flex items-center gap-3">
                {currentPro.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>
              <div className="flex  items-center">
                <a
                  href={currentPro.href}
                  className="flex items-center gap-2 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="grid-subtext ">Check Live Site</span>
                  <img
                    src="/assets/arrow-up.png"
                    alt="href"
                    className="w-3 h-3"
                  />
                </a>
              </div>
            </div>
            <div className="w-full justify-between items-center flex">
              <div
                className="cursor-pointer"
                onClick={() => {
                  handleNav("previous");
                }}
              >
                <img
                  src="/assets/left-arrow.png"
                  alt="left-arrow"
                  className="w-4 h-4"
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  handleNav("next");
                }}
              >
                <img
                  src="/assets/right-arrow.png"
                  alt="right-arrow"
                  className="w-4 h-4"
                />
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="rounded-2xl border-1  border-[#424242]  bg-[#111111] h-96 md:h-full">
        <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentPro.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
