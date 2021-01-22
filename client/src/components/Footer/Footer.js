import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithubAlt,
  FaInstagram,
  FaPaperPlane, FaPhone, FaAddressCard

} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="dk-footer" className="dk-footer">
        <div >
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="dk-footer-box-info">
                <a href="index.html" className="footer-logo">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png"
                    alt="footer_logo"
                    className="img-fluid"
                  />
                </a>
                <p className="footer-info-text">
                  <span className="footer-info-text">About us ?</span>
                  We allow you to discover the world through our site!
                </p>
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Social link */}
              </div>
              {/* End Footer info */}
              
            </div>
            {/* End Col */}
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-8">
                  <div className="contact-us">
                    
                    {/* End contact Icon */}
                   
                    {/* End Contact Info */}
                  </div>
                  {/* End Contact Us */}
                </div>
                {/* End Col */}
                
                {/* End Col */}
              </div>
              {/* End Contact Row */}
              <div className="row">
                <div className="col-md-12 col-lg-4" style={{width:'50px'}}>
                  <div className="footer-widget footer-left-widget">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black" />
                    </div>
                    <ul>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Projects</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                    
                      
                    
                  </div>
                  {/* End Footer Widget */}
                </div>
                {/* End col */}
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget">
                    <div className="section-heading">
                      <h3>Contact Us</h3>
                      <span className="animate-border border-black" />
                    </div>
                    <FaPhone style={{color:'white'}}/> <p className="footer-info-text">00216 24 395 546</p>
                    <p className="footer-info-text">
                      {/* Don’t miss to subscribe to our new feeds, kindly fill the form below. */}
                    
                    <FaAddressCard/> <span className="footer-info-text">Cite ELGhazela Ariana Tunis 2083</span>
                      
                    </p>
                    
                    {/* End form */}
                  </div>
                  {/* End footer widget */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Col */}
          </div>
          {/* End Widget Row */}
        </div>
        {/* End Contact Container */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span style={{fontSize:'10px', textAlign:'center', marginLeft:'500px'}}>Copyright © 2021, All Right Reserved </span>
              </div>
              {/* End Col */}

              {/* End col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Copyright Container */}
        </div>
        {/* End Copyright */}
        {/* Back to top */}
        {/* <div id="back-to-top" className="back-to-top">
          <button
            className="btn btn-dark"
            title="Back to Top"
            style={{ display: "block" }}
          >
            <i className="fa fa-angle-up" />
          </button>
        </div> */}
      </footer>
    </div>
  );
};
export default Footer;

