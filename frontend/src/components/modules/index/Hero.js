import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAccount, useWriteContract } from 'wagmi';
import { ethers } from "ethers";
import CZToken from "../../../abi/CZTokenABI.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const { address, isConnected } = useAccount();
  async function claimLoginRewardDirectly() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contractAddress = "0xf3aa72EAeF2d7F56e08D260c889ab5309A81fde6";
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, CZToken.abi, signer);
    try {
      const tx = await contract.claimTokens();
      await tx.wait();
      console.log('Reward claimed successfully!');
    } catch (error) {
      console.error('Failed to claim reward:', error);
      toast.error("Sorry, you have claimed.", {
        position: "top-left"
      });
    }
  }

  useEffect(() => {
    if (isConnected) {
      toast.success("Welcome, new user can claim 5 CZTokens!", {
        position: "top-left"
      });
      claimLoginRewardDirectly();
    }
  }, [address, isConnected]);

  return (
    <>
      <ToastContainer />
      <section className="banner banner--style1">
        <div className="banner__bg">
          <div className="banner__bg-element">
            <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              src="images/banner/home1/bg.png"
              alt="section-bg-element"
              className="dark d-none d-lg-block"
            />
            <span className="bg-color d-lg-none"></span>
          </div>
        </div>
        <div className="container">
          <div className="banner__wrapper">
            <div className="row gy-5 gx-4">
              <div className="col-lg-6 col-md-7">
                <div
                  className="banner__content"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="banner__content-coin">
                    <img src="images/banner/home1/3.png" alt="coin icon" />
                  </div>
                  <h1 className="banner__content-heading">
                    CarbonZero
                  </h1>
                  <h3 className="banner__content-heading"> <span>Most creative B2C carbon neutral platform | A new direction for ReFi | Real world asset verification </span></h3>
                  <p className="banner__content-moto">
                    Discover low-carbon activities from companies you're interested in. Start earning by doing good things!
                  </p>
                  <div className="banner__btn-group btn-group">
                    <Link
                      href="signin"
                      className="trk-btn trk-btn--primary trk-btn--arrow"
                    >
                      {`Launch App   `}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>{" "}
                    </Link>

                  </div>

                  <div className="banner__content-social">
                    <p>Follow Us</p>
                    <ul className="social">
                      <li className="social__item">
                        <Link
                          scroll={false} href=""
                          className="social__link social__link--style1 active"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link
                          scroll={false} href=""
                          className="social__link social__link--style1"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link
                          scroll={false} href=""
                          className="social__link social__link--style1"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link
                          scroll={false} href=""
                          className="social__link social__link--style1"
                        >
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link
                          href="signin"
                          className="social__link social__link--style1"
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div
                  className="banner__thumb"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <img
                    src="images/banner/home1/1.png"
                    alt="banner-thumb"
                    className="dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner__shape">
          <span className="banner__shape-item banner__shape-item--1">
            <img src="images/banner/home1/4.png" alt="shape icon" />
          </span>
        </div>

      </section>
    </>
  );
};

export default Hero;
