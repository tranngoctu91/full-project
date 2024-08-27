import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/commons/ErrorComponent";

const LayoutAuthentication = (props) => {
  const { children, heading } = props;
  return (
    <div className="w-full min-h-screen bg-lite p-10 relative isolate">
      <img
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
        src="./bg.jpg"
        alt=""
      />

      <Link to="/" className="inline-block mb-5 lb:mb-16">
        <img className="" srcSet="./vite.svg" alt="" />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="font-semibold lg:text-xl mb-1 lg:mb-3 text-text1 text-center">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
