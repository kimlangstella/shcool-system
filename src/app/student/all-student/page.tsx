"use client";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

const Page = () => {
  const list = [
    {
      title: "Lyseth",
      img: "/photo.jpg",
      job: "student",
    },
  ];

  return (
    <>
      <div className="ml-[219px] mt-20 flex flex-col">
        <div className="w-[1068px] h-[40px] p-4 bg-white flex items-center justify-between">
          <span>Student | All student</span>

          <Link href={"/#"} passHref>
            <div className="h-[23px] w-[57px] bg-[#213458] flex items-center justify-center rounded-md">
              <Image
                src={"/refresh.svg"}
                width={16}
                height={16}
                alt="Refresh"
              />
            </div>
          </Link>
        </div>

        <div className="relative mt-2">
          <Dropdown />
        </div>

        <div className="mt-5 grid grid-cols-4 gap-4 ">
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {list.map((item, index) => (
              <Card
                shadow="sm"
                key={index}
                isPressable
                onPress={() => console.log("item pressed")}
                className="w-[243px] h-[244px] shadow-sm bg-white rounded-[9px]"
              >
                <CardBody className="overflow-visible  flex items-center p-4">
                  <Image
                    height={100}
                    width={100}
                    className="rounded-full object-cover "
                    src={item.img}
                    alt={""}
                  />
                  <b className="flex items-center mt-2">{item.title}</b>
                  <p className="text-default-500">{item.job}</p>
                </CardBody>
                <CardFooter className="justify-center items-center gap-2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      width: "150px",
                    }}
                  >
                    {/* Search Icon */}
                    <a href="/view">
                      <img
                        src="/view.svg"
                        alt="Search"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </a>
                    {/* Edit Icon */}
                    <a href="/edit">
                      <img
                        src="/edit.svg"
                        alt="Edit"
                        style={{
                          width: "30px",
                          height: "30px",
                          padding: "2px",
                        }}
                      />
                    </a>
                    {/* Delete Icon */}
                    <a href="/delete">
                      <img
                        src="/delete.svg"
                        alt="Delete"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </a>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
