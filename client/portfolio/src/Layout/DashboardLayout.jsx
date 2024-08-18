import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="d-block d-lg-none row justify-content-center align-items-center">
        {children}
      </div>
      <div className="d-lg-block d-none">
        <div className="row   justify-content-center align-items-center">
          <div className="col-10">
            <div className="card shadow-lg  ">
              <div className="card-body" >{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
