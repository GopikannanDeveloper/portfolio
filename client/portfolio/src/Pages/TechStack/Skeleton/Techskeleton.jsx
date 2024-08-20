import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";

const TechSkeleton = ({
  count,
  variant,
  height,
  spacing = "0.5rem",
  width,
}) => {

  const skeletons = Array.from({ length: count });

  return (
    <div >
      <div className="row gap-lg-5 justify-content-center align-items-center">
        {skeletons.map((_, index) => (
          <Box
            className={`col-lg-2 col-4  ${index < 4 ? "mb-3" : "mb-2"}`}
            key={index}
            sx={{ marginBottom: spacing }}
          >
            <Skeleton
              variant={variant}
              height={height}
              className="skeleton-wave col-8"
            />
            <Skeleton
              variant="text"
              width={75}
              height={20}
              className="skeleton-wave d-flex justify-content-center"
              sx={{ marginTop: spacing }}
            />
          </Box>
        ))}
      </div>
    </div>
  );
};

export default TechSkeleton;
