import React from "react";
import { useFetchData } from "../../hooks/servicehooks";
import { getProfile } from "../../apis/apiService";

const Home = () => {
  const { data: getProfileList } = useFetchData({
    key: "getProfile",
    url: getProfile,
  });
  return (
    <div className="row">
      <div className="col-8">
        <div className="d-flex flex-column gap-1">
          <span className="Poppins-Regular fnt-primary-color f-30 fw-bold">
            Hi
          </span>
          <span className="Poppins-Regular fnt-primary-color f-30 fw-bold">
            My Name is
            <span className="ms-2 Poppins-Regular text-gradient f-30 fw-bold">
              {getProfileList?.[0]?.name}
            </span>
          </span>
          <span className="Poppins-Regular fnt-primary-color f-22 fw-bold">
            {getProfileList?.[0]?.position}
          </span>
          <span className="Poppins-Regular fnt-primary-color f-14 fw-bold">
            {getProfileList?.[0]?.prof_summary}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
