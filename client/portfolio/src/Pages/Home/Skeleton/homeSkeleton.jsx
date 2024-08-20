// HomeSkeleton.js
import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";

const HomeSkeleton = () => {
  const renderProfile = () => {
    return (
      <Box className="d-flex justify-content-center align-items-center">
        <Skeleton
          variant="circular"
          width={300}
          height={200}
          className="skeleton-wave" 
          sx={{ objectFit: "contain" }}
        />
      </Box>
    );
  };

  return (
    <div className="row d-flex home-container">
      <div className="d-lg-none d-block col-12 ms-lg-4">{renderProfile()}</div>
      <div className="col-lg-8 col-12 p-lg-4 mt-lg-3 mt-2">
        <div className="d-flex flex-column gap-1">
          <Skeleton
            variant="text"
            width={75}
            className="skeleton-wave" 
            sx={{ marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="text"
            width={200}
            className="skeleton-wave" 
            sx={{ marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="text"
            width={200}
            className="skeleton-wave" 
            sx={{ marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="text"
            className="skeleton-wave" 
            sx={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="text"
            className="skeleton-wave" 
            sx={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="text"
            className="skeleton-wave" 
            sx={{ fontSize: "1rem", marginBottom: "0.5rem" }}
          />
        </div>
      </div>
      <div className="d-lg-block d-none col-2 ms-4 mt-3">{renderProfile()}</div>
    </div>
  );
};

export default HomeSkeleton;
