import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <>
      <footer className="footer brand-1">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__top footer__top--style1">
              <div className="row gy-5 gx-4">
                <div className="col-md-6">
                  <div className="footer__about">
                    <Link href="/" className="footer__about-logo"><img src="images/logo/logo-dark.png"
                      alt="Logo" /></Link>
                    <p className="footer__about-moto ">Most creative B2C carbon neutral platform | A new direction for ReFi | Real world asset verification</p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>Quick links</h6>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item"> <Link href="about">About Us</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link href="team">Teams</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link href="services">Services</Link> </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Features</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>Support</h6>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Terms & Conditions</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Privacy Policy</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="">FAQs</Link></li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Support Center</Link> </li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="col-md-2 col-sm-4">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>Company</h6>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Careers</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Updates</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Job</Link> </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Announce</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="footer__bottom">
              <div className="footer__end">
                <div className="footer__end-copyright">
                </div>
                <div>
                  <ul className="social">
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style22"><i className="fab fa-facebook-f"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style22 "><i className="fab fa-instagram"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style22"><i className="fa-brands fa-linkedin-in"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style22"><i className="fab fa-youtube"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style22 "><i className="fab fa-twitter"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__shape">
          <span className="footer__shape-item footer__shape-item--1"><img src="images/footer/1.png"
            alt="shape icon" /></span>
          <span className="footer__shape-item footer__shape-item--2"> <span></span> </span>
        </div>
      </footer>
      <ScrollToTop
        smooth
        height="16px"
        width="14px"
        className='scrollToTop scrollToTop--home1'
        viewBox="0 0 448 512"
        svgPath="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
      />
    </>
  );
}

export default Footer;
