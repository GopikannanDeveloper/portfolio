import React from "react";
import { useFetchData } from "../../hooks/servicehooks";
import { getMyProjects } from "../../apis/apiService";

const Projects = () => {
    const { data: getMyProjectsList } = useFetchData({
        key: "getMyProjects",
        url: getMyProjects,
      });
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-12 d-flex gap-2 flex-column mb-3">
          <span className="fnt-primary-color f-30 fw-bold">Projects</span>
          <span className="f-16 fnt-light-color">
            Things I’ve built so far
          </span>
        </div>
        {getMyProjectsList?.map((project) => (
        <div key={project._id} className="col-lg-5 col-12 card m-lg-3 m-0">
          <strong className="card-header">{project.title}</strong>
          <div className="card-body">
            <p className="card-text">{project.desc}</p>
            <p className="card-text">
              <strong>Tech Stack & Skills: </strong>
              {project.tech_stack}
            </p>
          </div>
          <div className="card-footer">{project.duration}</div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Projects;
