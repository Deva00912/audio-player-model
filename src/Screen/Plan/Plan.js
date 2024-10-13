import React, { useEffect, useState } from "react";
import { isValidArray } from "../../Services/Utils";
import { useParams } from "react-router-dom";
import { getProgram } from "../../Services/Service";
import "./Plan.css";
import { BackIcon } from "../../Assets/Icon";

export default function Plan(props) {
  const { planId } = useParams();

  const [program, setProgram] = useState(null);

  useEffect(() => {
    const fetchProgram = async (planId) => {
      const response = await getProgram(planId);

      setProgram(response);
    };

    fetchProgram(planId);

    // eslint-disable-next-line
  }, []);

  return (
    <div className=" inherit-parent-height inherit-parent-width display-flex flex-direction-column">
      <div
        className=" height-50-percentage inherit-parent-width display-flex padding-large"
        style={{
          backgroundImage: `url(${program?.imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <h2 className=" position-absolute bottom-0 padding-default font-color-white ">
          {program?.title}
        </h2>
      </div>
      <div className=" height-20-percentage inherit-parent-width padding-large background-color-secondary font-color-white font-size-default">
        {program?.description}
      </div>
      <div
        className=" padding-large inherit-parent-width background-color-black  overflow-hidden"
        style={{
          height: "calc(100% - 391px)",
          maxHeight: "350px",
        }}
      >
        {isValidArray(program?.tracks) &&
          program?.tracks?.map((track) => (
            <div
              className=" inherit-parent-width display-flex flex-direction-column border-bottom-grey padding-top-default padding-bottom-default"
              onClick={() => {
                props.navigate(`track/${track?._id}`);
              }}
            >
              <div
                className=" inherit-parent-width font-color-white font-size-small padding-top-smaller padding-bottom-smaller"
                style={{
                  maxHeight: "30px",
                }}
              >
                {" "}
                {track?.title}
              </div>
              <div
                className=" inherit-parent-width font-color-white font-size-smaller padding-top-smaller padding-bottom-smaller"
                style={{
                  maxHeight: "30px",
                }}
              >
                {" "}
                {track?.description}
              </div>
            </div>
          ))}

        {!isValidArray(program?.tracks) && (
          <div
            className=" display-flex flex-align-items-center flex-justify-content-center inherit-parent-width font-color-white"
            style={{
              height: "calc(100% - 391px)",
            }}
          >
            {" "}
            No track found :(
          </div>
        )}
      </div>

      <div
        className=" position-absolute inherit-parent-width z-index-1 height-10-percentage display-flex flex-align-items-center background-color-black bottom-0 padding-large"
        onClick={() => {
          props.navigate("/");
        }}
      >
        <BackIcon color="orange" />
      </div>
    </div>
  );
}
