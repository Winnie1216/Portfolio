import React, { Suspense } from "react";
import { workExperiences } from "../constants";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

const Experience = () => {
  return (
    <section className="w-full my-20 px-[16px] ">
      <div className="head-text text-left w-full">
         Relevant Experience
      </div>
      <div
        className="my-4 grid grid-cols-1 lg:grid-cols-[minmax(500px,_auto)_1fr] gap-8
"
      >
        <div className="grid col-span-1 border-[#424242]  bg-[#111111] rounded-2xl h-auto">
          <Canvas>
            <ambientLight intensity={7}></ambientLight>
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
            ></spotLight>
            <directionalLight
              position={[10, 10, 10]}
              intensity={1}
            ></directionalLight>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            <Suspense fallback={CanvasLoader}>
              <Developer position-y={-3} scale={3} />
            </Suspense>
          </Canvas>
        </div>
        <div className="grid col-span-1 border-[#424242]  bg-[#111111] rounded-2xl h-auto py-10 px-5">
          {workExperiences.map(
            ({ id, name, pos, duration, icon, title }, index) => {
              return (
                <div
                  className=" group flex w-full px-12 cursor-pointer hover:bg-[#2d2d2d] rounded-2xl ease-in-out py-4 gap-5"
                  key={id}
                >
                  <div className=" flex flex-col  items-center group ">
                    <div className="flex justify-center items-center rounded-2xl bg-[#2d2d2d] w-[50px] h-[50px]">
                      <img src={icon} alt="jobIcon" className="w-7 h-7" />
                    </div>
                    <div
                      className={`flex w-px h-[90px] mt-6 ${
                        index === workExperiences.length - 1
                          ? "opacity-0"
                          : "bg-[#414141] group-hover:bg-white"
                      }`}
                    ></div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <span className="font-semibold text-[16px] text-left text-white">
                        {name}
                      </span>
                      <div className="flex grid-subtext gap-3">
                        <span>{pos}</span>
                        <span>{duration}</span>
                      </div>
                    </div>
                    <div className="text-[#afb0b6] text-[16px] text-left">
                      {title}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
