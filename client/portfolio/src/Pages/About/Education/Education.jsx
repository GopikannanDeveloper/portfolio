import React from "react";
import { useFetchData } from "../../../hooks/servicehooks";
import { getEducation } from "../../../apis/apiService";

const Education = () => {
    const { data: getEducationList } = useFetchData({
        key: "getEducation",
        url: getEducation,
      });

  return (
    <div className="row mt-3 Poppins-Regular">
    <div className="col-lg-8 col-12">
      <div className=" fnt-primary-color f-30 fw-bold mb-3">Education</div>
      <div>
        {getEducationList?.data?.map((edu) => (
          <div key={edu._id} className="mb-3">
            <div>
              <span className="Poppins-Regular fnt-secondary-color f-20">
                {edu?.degree}
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-lg-3 ">
                <div className="d-flex align-items-lg-end justify-content-center">
                  <span className="material-symbols-outlined fnt-secondary-color">
                    apartment
                  </span>
                  <span className="f-12 fnt-light-color ms-2">
                    {edu?.institution_name}
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="material-symbols-outlined fnt-secondary-color">
                    location_on
                  </span>
                  <span className="f-12 fnt-light-color ms-1">
                    {edu?.location}
                  </span>
                </div>
              </div>
              <div className="d-lg-block d-none">
             <span className="fnt-light-color f-12">{edu.duration}</span>
           </div>
            </div>
            <div className="d-lg-none d-block">
             <span className="fnt-light-color f-12">{edu.duration}</span>
           </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Education;
