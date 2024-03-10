import { Tab, Nav } from "react-bootstrap";
import Counter from "@/components/base/Counter";
const featureData = [
  {
    Benefit: "Get NFT or CZToken award if joining the business's low carbon activities",
    rating: "images/feature/5.png",
    availableForLoan: 10,
    img: "/images/feature/1.png",
  },
  {
    Benefit: "Vote the most sustainable company to win Airdrop from platform",
    rating: "images/feature/6.png",
    availableForLoan: 18,
    img: "/images/feature/1.png",
  },
  {
    Benefit: "Investm next company project, get dividends after launched successfully ",
    rating: "images/feature/7.png",
    availableForLoan: 30,
    img: "/images/feature/1.png",
  },
  {
    Benefit: "Random value of NFT with ERC404 contract",
    rating: "images/feature/8.png",
    availableForLoan: 28,
    img: "/images/feature/1.png",
  },
];
function Featured() {
  return (
    <section className="feature feature--style1 padding-bottom padding-top bg-color">
      <div className="container">
        <div className="feature__wrapper">
          <div className="row g-5 align-items-center justify-content-between">
            <Tab.Container defaultActiveKey={0}>
              <div className="col-md-6 col-lg-5">
                <div
                  className="feature__content"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <div className="feature__content-inner">
                    <div className="section-header">
                      <h2 className="mb-15 mt-minus-5">
                        {" "}
                        <span>benefits </span>for users
                      </h2>
                      <p className="mb-0">
                        Unlike other ReFi models that only conduct carbon trading, we allow users to participate in rating and investing in corporate environmental protection and provide many benefits.
                      </p>
                    </div>

                    <div className="feature__nav">
                      <Nav
                        variant="pills"
                        className="nav--feature"
                      >
                        {featureData.map((item, index) => (
                          <Nav.Link key={index} eventKey={index}>
                            <Nav.Item className="feature__item">
                              <div className="feature__item-inner">
                                <div className="feature__item-content">
                                  <h6>{item.Benefit}</h6>
                                </div>
                              </div>
                            </Nav.Item>
                          </Nav.Link>
                        ))}
                      </Nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div
                  className="feature__thumb pt-5 pt-md-0"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <div className="feature__thumb-inner">
                    <Tab.Content
                    >
                      {featureData.map((item, index) => (
                        <Tab.Pane eventKey={index} key={index}>
                          <div className="feature__image floating-content">
                            <img src={item.img} alt="Feature image" width={500} height={500} />
                            <div
                              className="floating-content__top-right floating-content__top-right--style2"
                              data-aos="fade-left"
                              data-aos-durnameation="1000"
                            >
                              <div className="floating-content__item floating-content__item--style2 text-center">
                                <img src={item.rating} alt="rating" />
                                <p className="style2">tokens for Airdrop</p>
                              </div>
                            </div>
                            <div
                              className="floating-content__bottom-left floating-content__bottom-left--style2"
                              data-aos="fade-left"
                              data-aos-duration="1000"
                            >
                              <div className="floating-content__item floating-content__item--style3  d-flex align-items-center">
                                <h3 className="style2">
                                  {" "}
                                  <span

                                  >
                                    {/* {item.availableForLoan} */}
                                    <Counter start={0} end={item.availableForLoan} delay={100} />
                                  </span>
                                  M
                                </h3>
                                <p className="ms-3 style2">
                                  Available in challengePool
                                </p>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </div>
                </div>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
      <div className="feature__shape">
        <span className="feature__shape-item feature__shape-item--1">
          <img src="/images/feature/shape/1.png" alt="shape-icon" />
        </span>
        <span className="feature__shape-item feature__shape-item--2">
          {" "}
          <span></span>{" "}
        </span>
      </div>
    </section>
  );
}

export default Featured;
