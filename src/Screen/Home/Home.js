import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <div className=" inherit-parent-height inherit-parent-width padding-large flex-direction-column ">
        <NavBar />
        <div>Home</div>
      </div>
    </>
  );
}
