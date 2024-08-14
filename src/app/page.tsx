import React from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

const page = () => {
  return (
    <>
      <div className="flex flex-row gap-6">
        <div>
          <Dashboard children={undefined}></Dashboard>
        </div>
      </div>
    </>
  );
};

export default page;
