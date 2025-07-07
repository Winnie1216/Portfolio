import React from "react";
import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <div className="w-full my-20 px-[16px] ">
      <div className="head-text text-left">Feedback</div>
      <div className="grid w-full lg:grid-cols-2 grid-cols-1 gap-5 mt-8 ">
        {clientReviews.map(({ id, name, img, position, review }) => {
          return (
            <div className="col-span-1 bg-[#111111]  p-8 py-12 flex flex-col  justify-center rounded-2xl" key={id}>
              <div className="grid-subtext text-left">{review}</div>
              <div className="flex justify-between w-full flex-wrap gap-5">
                <div className="flex gap-2 mt-5">
                  <img
                    src={img}
                    alt="avatar"
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div className="flex flex-col gap-1.5 justify-start">
                    <div className="font-semibold text-white text-[15px] text-left">
                      {name}
                    </div>
                    <div className="text-[15px] font-normal text-gray-500 text-left">
                      {position}
                    </div>
                  </div>
                  
                </div>
                <div className="flex gap-2 place-items-end">
                    {Array.from({ length: 5 }).map((_, index) => {
                      return (
                        <img
                          src="/Portfolio/assets/star.png"
                          alt="star"
                          className="w-5 h-5"
                          key={index}
                        />
                      );
                    })}
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
