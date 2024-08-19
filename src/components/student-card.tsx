"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Lyseth",
      img: "/photo.jpg",
      job: "student",
    },
  ];

  return (
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
              className="w-full rounded-full object-cover  h-[140px]"
              src={item.img}
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
  );
}
