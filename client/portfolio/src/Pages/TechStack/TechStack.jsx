import React from "react";
import { useFetchData } from "../../hooks/servicehooks";
import { getMyLearn, getMyTech } from "../../apis/apiService";
import { techImages, learnImages } from "./Techimages";
import TechSkeleton from "./Skeleton/Techskeleton";

const TechStack = () => {
  const { data: getMyTechList,isPending } = useFetchData({
    key: "getMyTech",
    url: getMyTech,
  });

  const { data: getMyLearnStackList, isPending: learnPending } = useFetchData({
    key: "getMyLearn",
    url: getMyLearn,
  });

  return (
    <>
      <div className="row Poppins-Regular">
        <div className="col-lg-10 col-12 d-flex gap-2 flex-column mb-lg-3 mb-5">
          <span className="fnt-primary-color f-30 fw-bold">My Tech Stack</span>
          <span className="f-16 fnt-light-color">
            Technologies I’ve been working with on projects
          </span>
        </div>
        {isPending ? (
          <TechSkeleton
            count={9}
            variant="rectangular"
            width={75}
            height={100}
          />
        ) : (
          <div className="row">
            {getMyTechList?.map((tech) => (
              <div
                key={tech._id}
                className="col-lg-3 col-6 mb-lg-3 mb-4 d-flex flex-column align-items-center justify-content-center"
              >
                <img
                  src={techImages[tech.tech_name] || ""} // Use the techImages object
                  alt={tech.tech_name}
                  className="tech-image"
                  style={{
                    height: "75px",
                    width: "75px",
                    objectFit: "contain",
                  }}
                />

                <div className="fnt-light-color f-20 text-center mt-2">
                  {tech.tech_name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="row Poppins-Regular">
        <div className="col-lg-10 col-12 d-flex gap-2 flex-column mb-lg-3 mb-5">
          <span className="fnt-primary-color f-30 fw-bold">Learning Stack</span>
          <span className="f-16 fnt-light-color">
            Technologies I’ve been learning
          </span>
        </div>
        {learnPending ? (
           <TechSkeleton
           count={4}
           variant="rectangular"
           width={75}
           height={100}
         />
        ) : (
          <div className="row">
            {getMyLearnStackList?.map((tech) => (
              <div
                key={tech._id}
                className="col-lg-3 col-6 mb-lg-3 mb-4 d-flex flex-column align-items-center justify-content-center"
              >
                <img
                  src={learnImages[tech.tech_name] || ""} // Use the techImages object
                  alt={tech.tech_name}
                  className="tech-image"
                  style={{
                    height: "75px",
                    width: "75px",
                    objectFit: "contain",
                  }}
                />

                <div className="fnt-light-color f-20 text-center mt-2">
                  {tech.tech_name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TechStack;
