import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <a href="https://www.facebook.com/" className="fab fa-facebook">         
          </a>
          <a href="https://www.instagram.com/" className="fab fa-instagram">            
          </a>
          <a href="https://twitter.com/" className="fab fa-twitter">            
          </a>
          <a href="https://www.linkedin.com/" className="fab fa-linkedin">            
          </a>
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/menu">Menu</a>
          <a href="/products">Products</a>
          <a href="/review">Review</a>
          <a href="/blogs">Blogs</a>
          <a href="/contact">Contact us</a>
        </div>
        <div className="credit">
          Created By <span>Nadeem</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
