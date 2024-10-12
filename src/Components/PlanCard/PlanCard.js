import React from "react";
import "./PlanCard.css";
import { LockIcon } from "../../Assets/Icon";

export default function PlanCard(props) {
  return (
    <div
      className={` display-flex height-20-percentage width-20-percentage ${props?.className}`}
    >
      <LockButton />
      <div className=" padding-smaller">{props.data.title}</div>
      <div className=" padding-smaller">{props.data.description}</div>
    </div>
  );
}

const LockButton = (props) => {
  return (
    <div
      className=" position-absolute top-0 right-0 padding-default border-radius-50-percentage backdrop-filter-blur"
      onClick={props?.onClick}
    >
      <LockIcon />
    </div>
  );
};
