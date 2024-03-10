/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";

function Roadmap() {
  const route = useRouter()
  return (
    <section className="roadmap roadmap--style1 padding-top  padding-bottom bg-color" id="roadmap">
      <div className="container">
        <div className="section-header section-header--max50">
          <h2 className="mb-15 mt-minus-5"><span> roadmap</span></h2>
          <p>A product roadmap shows the path ahead, helps teams plan, and guides the delivery of the product.</p>
        </div>
        <div className="roadmap__wrapper">
          <div className="row gy-4 gy-md-0 gx-5">
            <div className="col-md-6 offset-md-6">
              <div className="roadmap__item ms-md-4 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800">
                <div className="roadmap__item-inner">
                  <div className="roadmap__item-content">
                    <div className="roadmap__item-header">
                      <h3>Establish Infrastructure</h3>
                      <span>P1</span>
                    </div>
                    <p>Set up the foundational technical architecture of the CarbonZero platform. Integrate the MRV system to monitor and digitize enterprises' low-carbon activities. Implement the NFT/Token reward system for users participating in corporate activities and making product purchases.</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-6">
              <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init aos-animate" data-aos="fade-right"
                data-aos-duration="800">
                <div className="roadmap__item-inner">
                  <div className="roadmap__item-content">
                    <div className="roadmap__item-header">
                      <h3>Platform Optimization and User Growth</h3>
                      <span>P2</span>
                    </div>
                    <p>Execute a comprehensive marketing plan to increase platform awareness. Attract more corporate partners to expand the platform's influence. Optimize the platform's user interface to enhance user experience and usability.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-md-6">
              <div className="roadmap__item ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
                <div className="roadmap__item-inner">
                  <div className="roadmap__item-content">
                    <div className="roadmap__item-header">
                      <h3>Technical Upgrades and Feature Expansion</h3>
                      <span>P3</span>
                    </div>
                    <p>Further leverage ERC404 to introduce more playability elements, such as NFT synthesis and upgrades. Further integrate zero-knowledge proof technology to protect the privacy of submitted enterprise data.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init" data-aos="fade-right"
                data-aos-duration="800">
                <div className="roadmap__item-inner">
                  <div className="roadmap__item-content">
                    <div className="roadmap__item-header">
                      <h3>Future Plan</h3>
                      <span>P4</span>
                    </div>
                    <p>Expand to more countries and regions, establishing a global carbon-neutral ecosystem. Implement DAO governance mechanisms to enhance community participation and influence on the platform.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="roadmap__shape">
        <span className="roadmap__shape-item roadmap__shape-item--1"> <span></span> </span>
        <span className="roadmap__shape-item roadmap__shape-item--2"> <img src="/images/icon/1.png" alt="shape-icon" />
        </span>
      </div>
    </section>
  );
}

export default Roadmap;
