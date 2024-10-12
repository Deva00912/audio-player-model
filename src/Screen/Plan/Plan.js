import React from "react";
import { isValidArray } from "../../Services/Utils";

export default function Plan(props) {
  return (
    <div className=" inherit-parent-height inherit-parent-width display-flex">
      <div className=" height-50-percentage inherit-parent-width display-flex padding-large">
        <div className=" position-absolute bottom-0 padding-default">
          {props.data?.title}
        </div>
      </div>
      <div className=" height-30-percentage inherit-parent-width padding-large background-color-secondary font-color-white font-size-default">
        {props.data?.description}
      </div>
      <div className=" padding-large inherit-parent-width">
        {isValidArray(props?.data?.tracks) &&
          props?.data?.tracks?.map((track) => (
            <div className=" inherit-parent-width display-flex flex-direction-column background-color-black">
              <div className=" inherit-parent-width font-color-white">
                {" "}
                {track?.title}
              </div>
              <div className=" inherit-parent-width font-color-white">
                {" "}
                {track?.description}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
