import React from "react";
import "./Loader.css";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <Bars
          height="200"
          width="140"
          color="#e85100"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
