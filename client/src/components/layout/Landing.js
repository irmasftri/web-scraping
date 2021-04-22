import React from "react";
import ScrapeContainer from "../scrape/ScrapeContainer";

const Landing = () => {
  return (
    <section className='hero is-white'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title'>
            <strong>Scrape the Web of Sport News</strong>
          </h1>
          <h2 className='subtitle'>
            <strong>merangkum berita dari berbagai situs sport</strong>
          </h2>
        </div>
        <br />
        <ScrapeContainer />
      </div>
      <div className='hero-foot'>
        <div className='container has-text-centered'>
          <h2 className='subtitle footer-text'>&copy; Irma Safitri</h2>
        </div>
      </div>
    </section>
  );
};

export default Landing;
