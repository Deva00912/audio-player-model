import React, { useEffect, useState } from "react";
import { fetchProgramsPagination } from "../../Services/Service";
import { isValidArray } from "../../Services/Utils";
import PlanCard from "../../Components/PlanCard/PlanCard";
import Header from "../../Components/Header/Header";

export default function Home(props) {
  const [programs, setPrograms] = useState(
    localStorage.getItem("programs")
      ? JSON.parse(localStorage.getItem("programs"))
      : []
  );

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      if (!isFetching) setIsFetching(true);
      const response = await fetchProgramsPagination(1, 7);

      setPrograms(response);
      localStorage.setItem("programs", JSON.stringify(response));

      setIsFetching(false);
    };

    if (!isValidArray(programs)) {
      fetchPrograms();
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="inherit-parent-height inherit-parent-width  flex-direction-column ">
        <Header />
        <div
          style={{
            height: "calc(100% - 59px)",
          }}
          className="padding-large"
        >
          {isFetching && (
            <div className=" display-flex flex-justify-content-center flex-align-items-center font-size-default inherit-parent-height inherit-parent-width">
              {" "}
              Fetching your plans
            </div>
          )}

          {!isFetching && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                gridColumnGap: "20px",
                gridRowGap: "20px",
              }}
            >
              {isValidArray(programs?.programs) &&
                programs?.programs.map((program) => (
                  <PlanCard
                    data={program}
                    onClick={() => {
                      console.log({ program });
                      props.navigate(`plan/${program?._id}`);
                    }}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
