import React,{useRef} from "react";
import logo from "../assets/images/logo.png";
import { cart } from "../Data";

const NavBar = () => {
    const serachRef = useRef();
    const cartRef = useRef();
    const navRef = useRef();
    const searchHandler = () =>{
        serachRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        navRef.current.classList.remove("active");
    };
    const cartHandler = () =>{
        cartRef.current.classList.toggle("active");
        serachRef.current.classList.remove("active");
        navRef.current.classList.remove("active");
    };
    const navHandler = () =>{
        navRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        serachRef.current.classList.remove("active");
    };
  return (
    <>
      <header className="header">
        <a href="#/" className="logo">
          <img src={logo} alt="" />
        </a>
        <nav className="navbar" ref={navRef}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#product">Product</a>
            <a href="#review">Review</a>           
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact</a>
        </nav>
        <div className="icons">
            <div className="fas fa-search" onClick={searchHandler}></div>
            <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
            <div className="fas fa-bars" id="menu-btn" onClick={navHandler}></div>
          </div>
        <div className="search-form" ref={serachRef}>
         <input type="search" placeholder="Search here..." id="search-box"/>
         <label htmlFor="search-box" className="fas fa-search"></label>
         </div>  

         <div className="cart-items-container" ref={cartRef}>
            {cart.map((item,index)=>(
            <div className="cart-item" key={index}>
                <span className="fas fa-times"></span>
                <img src={item.img} alt=""/>
                <div className="content">
                    <h3>Cart Item</h3>   
                    <div className="price">$50.99</div>                 
                </div>
               
             </div>
            
            ))
        }
         <a href="#/" className="btn">Checkout</a>
         </div>
      </header>
    </>
  );
};

export default NavBar;
