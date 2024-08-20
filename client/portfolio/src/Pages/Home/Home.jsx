import React from "react";
import { useFetchData } from "../../hooks/servicehooks";
import { getProfile } from "../../apis/apiService";
import Profile from "../../assets/images/profile-pic.png";
import HomeSkeleton from "./Skeleton/homeSkeleton";
const Home = () => {
  const { data: getProfileList, isPending: pending } = useFetchData({
    key: "getProfile",
    url: getProfile,
  });

  if (pending) {
    return (
      <>
        <HomeSkeleton />
      </>
    );
  }
  const renderProfile = () => {
    return (
      <div className="d-flex justify-content-center">
        <img
          src={Profile}
          className="profile-image mt-lg-4 mt-1"
          style={{ objectFit: "contain" }}
        />
      </div>
    );
  };
  return (
    <div className="row d-flex home-container  ">
      <div className="d-lg-none d-block  col-12 ms-lg-4 ">
        {renderProfile()}
      </div>
      <div className="col-lg-8  col-12 p-lg-4 mt-lg-3 mt-2">
        <div className="d-flex flex-column gap-1">
          <span className="Poppins-Regular fnt-primary-color f-30 fw-bold">
            Hi,
          </span>
          <span className="Poppins-Regular fnt-primary-color f-30 fw-bold">
            I'm
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
      <div className="d-lg-block d-none col-2 ms-4">{renderProfile()}</div>
    </div>
  );
};

export default Home;
