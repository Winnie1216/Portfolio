import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [isCopied,setIsCopied]=useState(false)
const handleCopy=()=>{
  navigator.clipboard.writeText("winnie1197943420@gmail.com")
  setIsCopied(true)
  setTimeout(()=>{
    setIsCopied(false)
  },2000)
}



  return (
    <section className="c-space my-20 rounded-2xl" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-rows-6 h-full gap-5 ">
        <div className="col-span-1 xl:row-span-3 bg-[#111111]    ">
          <div className="rounded-2xl border-1 border-[#424242] grid-container">
            <img
              src="/Portfolio/assets/grid1.png"
              alt="grid1"
              className="w-full object-contain sm:h-[276px]"
            />

            <div className="grid-headtext text-left">I'm Winnie Yao</div>
            <div className="grid-subtext text-left ">
            Hi, I’m Winnie Yao, a full-stack developer with a strong passion for building clean, user-focused digital experiences. My strength lies in bridging backend logic with polished frontend experiences, always aiming for clean, maintainable code.
With Agile team experience and a delivery-first mindset, I’m ready to turn ideas into real, impactful products.


            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3 w-full  bg-[#111111] ">
          <div className="grid-container rounded-2xl border-1 border-[#424242]">
            <img
              src="/Portfolio/assets/grid2.png"
              alt="grid2.png"
              className="object-contain sm:h-[276px] h-fit"
            />
            <div className="grid-headtext text-left">Tech Stack</div>
            <div className="grid-subtext text-left">
              I specialize in React, Node.js, and .NET, and I’m comfortable working across the full development lifecycle — from frontend design to backend architecture. I have hands-on experience with TypeScript, Tailwind CSS, and modern build tools like Vite and Webpack, and I’ve delivered production-grade features in both monolithic and microservice environments.
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4 bg-[#111111]">
          <div className="grid-container rounded-2xl border-1  border-[#424242]">
            <div className=" flex justify-center items-center sm:h-[326px] ">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <p className="grid-headtext text-left">
              I'm very flexible with time zone communications & locations
            </p>
            <p className="grid-subtext text-left">
              I'm based in Sydney,and open to remote work worldwide.
            </p>
            <div className="mt-8">
            <a href="#contact">
             <Button
                name={"Contact Me"}
                isBeam
                containerClass={"bg-[#2f2f2f]/50 w-full"}
                
              /></a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3 bg-[#111111] ">
          <div className="grid-container rounded-2xl border-1  border-[#424242]">
            <img src="/Portfolio/assets/grid3.png" alt="grid3.png" className="w-full sm-[266px] object-contain h-[326px]" />
            
              <p className="grid-headtext text-left">My Passion for Coding</p>
              <p className="grid-subtext text-left">I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.</p>
           

          </div>

        </div>
        <div className="col-span-1 xl:row-span-2 bg-[#111111] ">
          <div className="grid-container rounded-2xl border-1  border-[#424242] ">
            <img src="/Portfolio/assets/grid4.png" alt="grid4.png" className="w-full md:h-[126px] sm:h-[276px] object-cover sm:object-top" />
            <p className="grid-subtext">Contact Me</p>
            <span onClick={handleCopy} className=" cursor-pointer flex justify-center items-center gap-2 mt-2 ">
              <img src={isCopied? "/Portfolio/assets/tick.svg":"/Portfolio/assets/copy.svg"} alt="copy" />
              <span className=" lg:text-xl md:text-xl font-medium  text-white">huihuiyao1120@gmail.com</span>
            </span>

          </div>

        </div>
        
      </div>
    </section>
  );
};

export default About;
