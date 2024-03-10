/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import CountUp from "react-countup";
function About() {
  return (
    <section className="about about--style1 ">
      <div className="container">
        <div className="about__wrapper">
          <div className="row gx-5  gy-4 gy-sm-0  align-items-center">
            <div className="col-lg-6">
              <div
                className="about__thumb pe-lg-5"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <img
                      className="dark"
                      src="/images/about/1.png"
                      alt="about-image"
                    />
                    <div className="floating-content__top-left">
                      <div className="floating-content__item">
                        <h3>
                          {" "}
                          <span
                            className="purecounter"
                            data-purecounter-start="-1000"
                            data-purecounter-end="-2000"
                          >
                            <CountUp end={-2000} duration={5} />
                          </span>
                          {" "}Gt
                        </h3>
                        <p>Carbon Emissions</p>
                      </div>
                    </div>
                    <div className="floating-content__bottom-right">
                      <div className="floating-content__item">
                        <h3>
                          {" "}
                          <span
                            className="purecounter"
                            data-purecounter-start="0"
                            data-purecounter-end="100"
                          >
                            <CountUp end={100} duration={5} />

                          </span>
                          +
                        </h3>
                        <p>Big Companies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="about__content-inner">
                  <h2>
                    Help company put carbon footprint  <span>on chain</span>{" "}
                  </h2>

                  <p className="mb-0">
                    By carrying out low-carbon activities and launching environmentally friendly products, companies are qualified to clear their carbon footprint on the blockchain.{" "}
                    Record the carbon neutrality records on the blockchain through offline VFS certification.
                  </p>
                  <Link href="about"
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    Explore More{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
