import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
const home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row
        rowID="4"
        title="Just for you"
        fetchURL={requests.requestJustForYOu}
      />
      <Row rowID="5" title="Romance" fetchURL={requests.requestRomance} />
      <div className="pb-20"></div>
    </>
  );
};

export default home;
