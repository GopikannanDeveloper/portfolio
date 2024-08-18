import React from "react";
import { useFetchData } from "../../hooks/servicehooks";
import { getMyTech } from "../../apis/apiService";

const TechStack = () => {
  const { data: getMyTechList } = useFetchData({
    key: "getMyTech",
    url: getMyTech,
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
        <div className="row">
          {getMyTechList?.map((tech) => (
            <div
              key={tech._id}
              className="col-lg-3 col-4 mb-3 d-flex flex-column align-items-center justify-content-center"
            >
              <img
                src={`/images/${tech.tech_image}`}
                alt={tech.tech_name}
                className="tech-image"
                style={{ height: "75px", width: "75px", objectFit: "contain" }}
              />
              <div className="fnt-light-color f-20 text-center mt-2">
                {tech.tech_name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
