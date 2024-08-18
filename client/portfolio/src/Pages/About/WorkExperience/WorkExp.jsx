import React from "react";
import { useFetchData } from "../../../hooks/servicehooks";
import { getExperience } from "../../../apis/apiService";
import Chip from "@mui/material/Chip";

const WorkExp = () => {
  const { data: getExperienceList } = useFetchData({
    key: "getExperience",
    url: getExperience,
  });

  return (
    <div className="row mt-3 Poppins-Regular">
      <div className="col-lg-8 col-12">
        <div className=" fnt-primary-color f-30 fw-bold mb-3">Work Experience</div>
        <div>
          {getExperienceList?.data?.map((exp) => (
            <>            <div key={exp._id} className="mb-3">
              <div className=" d-flex justify-content-between">
                <span className=" Poppins-Regular fnt-secondary-color f-20">
                  {exp.position}
                </span>
                <span className=" f-9 fw-semibold">
                  <Chip
                    label={exp.job_type}
                    sx={{
                      backgroundColor: "#D7FFE0",
                      color: "#018C0F",
                    }}
                  />
                </span>
              </div>
              <div className=" d-flex justify-content-between">
                <div className="d-flex gap-lg-3 gap-2">
                  <div className="d-flex align-items-lg-end justify-content-center">
                    <span className="material-symbols-outlined fnt-secondary-color">
                      apartment
                    </span>
                    <span className="f-12 fnt-light-color ms-2">
                      {exp.company}
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="material-symbols-outlined fnt-secondary-color">
                      location_on
                    </span>
                    <span className="f-12 fnt-light-color ms-1">
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="d-lg-block d-none">
                  <span className="fnt-light-color f-12">{exp.duration}</span>
                </div>
              </div>
              <div className="d-lg-none d-block">
             <span className="fnt-light-color f-12">{exp.duration}</span>
           </div>
            </div>
            
           </>

          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
