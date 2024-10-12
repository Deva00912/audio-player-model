import React, { useEffect, useState } from "react";
import { BackIcon, CloseIcon } from "../../Assets/Icon";
import { fetchProgramsPagination } from "../../Services/Service";

export default function Track(props) {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    const fetchProgram = async () => {
      const response = await fetchProgramsPagination();

      console.log({ response: response });
      setSrc(response);
    };

    fetchProgram();
  }, []);

  return (
    <div className=" inherit-parent-height inherit-parent-width display flex padding-large">
      <div className=" inherit-parent-width height-fit-to-content display-flex flex-justify-content-space-between">
        <BackIcon />
        <CloseIcon />
      </div>

      <div className=" padding-vertical-default font-size-default font-color-white">
        {props?.data?.title}
      </div>

      <div className=" padding-vertical-default font-size-medium font-color-white">
        {props.data?.description}
      </div>

      <img
        src={src?.programs?.[0]?.imageUrl}
        alt="image-check"
        style={{
          width: "100%",
          height: "60%",
        }}
      />
    </div>
  );
}
