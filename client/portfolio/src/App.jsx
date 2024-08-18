import React from "react";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <AllRoutes />
      </Router>
    </React.Fragment>
  );
};

export default App;
