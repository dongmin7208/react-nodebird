import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => (
  <>
    <Head>
      <title>Dongmin NodeBird</title>
      <link rel="shortcut icon" href="https://nodebird.com/favicon.ico" />
    </Head>
    <Component />
  </>
);

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
