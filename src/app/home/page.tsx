import React from "react";
import Image from "next/image";
import Card from "@/components/Card";
import Report from "@/components/Report";
import Calender from "@/components/Calender";
import FacebookCard from "@/components/facebookCard";

const page = () => {
  return (
    <>
      <div className="flex justify-center ml-56 mt-16">
        <div className="w-[1070px] m-2 flex flex-row gap-10">
          <div className="w-[800px] flex flex-col p-2">
            {/* <--welcome--> */}
            <div className="w-[618px] bg-[#FF6F61] backdrop-opacity-75 h-[112px] rounded-[8px] flex flex-row justify-between">
              <div className="flex flex-col justify-center ml-4">
                <h1 className=" text-white font-medium text-xl">
                  Welcome back stella
                </h1>
                <h3 className="text-white font-medium text-[14px] ">
                  you work well , keep it up
                </h3>
              </div>
              <Image
                src={"/hello.svg"}
                width={100}
                height={100}
                alt="public"
                className="mr-7"
              />
            </div>
            <Card></Card>
            <Report></Report>
            <Report></Report>
          </div>
          <div className="w-[329px] h-full  m-2 shadow-sm rounded-lg">
            <Calender></Calender>
            {/* progressBar */}
            <div className="mt-4 p-4 w-[326px] h-[200px] rounded-sm bg-white">
              <p className="text-[15px] font-bold text-gray-900">
                Today New Student
              </p>
              <div aria-hidden="true" className="mt-2 flex items-center">
                <div className="flex-grow overflow-hidden rounded-full bg-gray-200">
                  <div
                    style={{ width: "50%" }}
                    className="h-2 rounded-full bg-indigo-600"
                  />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  50%
                </span>
              </div>
              <p className="text-[15px] font-bold text-gray-900">
                Today New Teacher
              </p>
              <div aria-hidden="true" className="mt-2 flex items-center">
                <div className="flex-grow overflow-hidden rounded-full bg-gray-200">
                  <div
                    style={{ width: "60%" }}
                    className="h-2 rounded-full bg-indigo-600"
                  />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  60%
                </span>
              </div>
              <p className="text-[15px] font-bold text-gray-900">
                Today Trail Student
              </p>
              <div aria-hidden="true" className="mt-2 flex items-center">
                <div className="flex-grow overflow-hidden rounded-full bg-gray-200">
                  <div
                    style={{ width: "30%" }}
                    className="h-2 rounded-full bg-indigo-600"
                  />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  30%
                </span>
              </div>
            </div>
            <FacebookCard></FacebookCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
