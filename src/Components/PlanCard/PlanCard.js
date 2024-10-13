import React from "react";
import "./PlanCard.css";
import { LockIcon } from "../../Assets/Icon";

export default function PlanCard(props) {
  return (
    <div
      className={` display-flex height-10-percentage overflow-hidden border-radius-default  ${props?.className}`}
      style={{
        width: "160px",
        height: "160px",
        backgroundImage: `url(${props.data?.imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "fill",
        position: "relative",
      }}
      onClick={props.onClick}
    >
      <LockButton />
      <div
        className=" display-flex flex-direction-column position-absolute bottom-0"
        style={{ width: "160px" }}
      >
        <div className=" padding-smaller font-size-medium font-color-white letter-spacing-4-percentage">
          {props.data.title}
        </div>
        <div className=" padding-top-small padding-right-small padding-bottom-default padding-left-small font-size-smaller font-color-white text-overflow-ellipsis">
          {props.data.description}
        </div>
      </div>
    </div>
  );
}

const LockButton = () => {
  return (
    <div className=" padding-default position-absolute top-0 right-0 padding-default border-radius-50-percentage backdrop-filter-blur flex-justify-content-center flex-align-items-center">
      <LockIcon />
    </div>
  );
};
