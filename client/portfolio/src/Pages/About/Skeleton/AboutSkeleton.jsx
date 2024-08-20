import React from "react";

const AboutSkeleton = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        width={200}
        className="skeleton-wave"
        sx={{ marginBottom: "0.5rem" }}
      />
    </>
  );
};

export default AboutSkeleton;
