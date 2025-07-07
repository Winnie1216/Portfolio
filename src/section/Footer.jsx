import React from "react";

export const Footer = () => {
  return (
    <section className="px-[30px]  border-[#424242] border-t-[1px] items-center  flex w-full  h-[50px] flex-wrap">
      <div className="text-white  w-full flex items-center justify-between h-full py-7 flex-wrap gap-3">
        <div className="grid-subtext">Terms & Condition | Privacy Policy</div>
        <div className="flex gap-5 items-center text-left">
          <a href="https://github.com/Winnie1216" target="_blank">
            <img src="/Portfolio/assets/github.svg" alt="github" className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <img src="/Portfolio/assets/linkedin.png" alt="linkedin" className="h-8 w-8" />
          </a>
         
        </div>
        <div className="grid-subtext text-left">
          <p>© 2025 Winnie(Huihui Yao). All rights reserved.</p>
          <p></p>
        </div>
      </div>
    </section>
  );
};
