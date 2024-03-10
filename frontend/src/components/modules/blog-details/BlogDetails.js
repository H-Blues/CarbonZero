/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments'
import Link from 'next/link'

const BlogDetails = () => {

  const buttonStyle = {
    backgroundColor: "#90ee90",
    color: "black",
    border: "none",
    borderRadius: "20px",
    padding: "15px 30px",
    margin: "-20px 30px 15px 10px",
    cursor: "pointer",
    outline: "none",
  };

  const join = () => {

  }

  const vote = () => {

  }
  return (
    <div className="blog-details__item">
      <div className="blog-details__item-inner">
        <div className="blog-details__thumb">
          <div className="blog-details__thumb-inner" data-aos="fade-up" data-aos-duration="800">
            <img src="/images/blog/2.png" alt="blog-image" />
          </div>
        </div>
        <div className="blog-details__content">
          <h3>  Circular fashion </h3>
          <div className="blog-details__meta">
            <ul>
              <li><img src="/images/icon/company.png" alt="user-icon" />
                Hennes & Mauritz AB</li>
              <li><img src="/images/icon/date.png" alt="date-icon" />
                April 25, 2024</li>
              <li>
                <Link scroll={false} href=""><img src="/images/icon/vote.png" alt="comment-icon" />
                  4 Votes </Link>
              </li>
            </ul>
          </div>
          <p className="mb-0">Resale is one of several circular business models that is helping the fashion industry shift from a linear ‘take-make-waste’ approach to a circular system. “One pillar of circular fashion is increasing how much existing clothing is used. As well as wearing the items you already own more often, this can mean repairing damaged garments, buying second hand or renting”, explains Sara.</p>
        </div>
        <div className="blog-details__segment" data-aos="fade-up" data-aos-duration="1000">
          <div className="blog-details__segment-inner">
            <div className="blog-details__segment-item">
              <div className="row gy-4">
                <div className="col-xl-12">
                  <div className="blog-details__segment-content">
                    <p> H&M Group has launched several different resale initiatives including curated in-store assortments as well as peer to peer websites where people sell their preloved pieces direct to other customers (see full list below). In addition, the group is the majority owner of Sellpy, an online platform that aims to make shopping and selling second hand as easy as possible by taking care of the whole process – photographing, listing and then shipping items when sold. Since 2022, Sellpy’s assortment has been integrated into H&M’s online stores in Germany and Sweden. </p>
                  </div>
                </div>
                <div className="col-xl-12">
                  <p className="mb-0">Although resale is growing, there is still a way to go before it becomes mainstream. “For a growing customer base buying and selling second hand clothing is just as normal as buying new. We hope that by offering resale alongside our traditional assortment both in store and online we can encourage more people to feel the same, so shopping second hand becomes a natural part of their experience with us”, states Sara..</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="blog-details__content">Excepted carbon saved: 500 Gt </h4>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>

          <button style={buttonStyle} onClick={() => console.log("Join")}>
            Join
          </button>

          <button style={buttonStyle} onClick={() => console.log("Vote")}>
            Vote
          </button>
        </div>
        <div className="blog-details__action" data-aos="fade-up" data-aos-duration="1000">
          <div className="blog-details__action-inner">
            <div className="blog-details__tag">
              <div className="tags tags--style2">
                <ul>
                  <li>
                    <h6 className="mb-0">Tags</h6>
                  </li>
                  <li><Link scroll={false} href="" className="active">Life</Link></li>
                  <li><Link scroll={false} href="">fashion</Link></li>
                </ul>
              </div>
            </div>
            <div className="blog-details__social">
              <ul className="social">
                <li className="social__item">
                  <h6 className="mb-0">Share</h6>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style2 active"><i className="fab fa-facebook-f"></i></Link>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style2 "><i className="fab fa-instagram"></i></Link>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style2 "><i
                    className="fa-brands fa-linkedin-in"></i></Link>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style2"><i
                    className="fab fa-youtube"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BlogDetails