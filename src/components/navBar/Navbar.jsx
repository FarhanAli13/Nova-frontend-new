import React, { useState } from "react";
import "./navbar.css";
import { close, menu, logo, profileIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [toggleMenu, setToggleMenu] = useState(false)
  const Menu = () => (
    <>
      <div className='nova__navbar-links_text_view'>
        <h1 onClick={() => navigate('/')} style={{ borderBottomStyle: window.location.href === 'http://localhost:3000/' ? 'solid' : 'none', }} >Home</h1>
      </div>
      <div className='nova__navbar-links_text_view'>
        <h1 onClick={() => navigate('/aboutus')} style={{ borderBottomStyle: window.location.href === 'http://localhost:3000/aboutus' ? 'solid' : 'none' }}>About Us</h1>
      </div>
      <div className='nova__navbar-links_text_view'>
        <h1 onClick={() => navigate('/locationpage')} style={{ borderBottomStyle: window.location.href === 'http://localhost:3000/locationpage' ? 'solid' : 'none' }}>Locations</h1>
      </div>
      <div className='nova__navbar-links_text_view'>
        <h1 onClick={() => navigate('/services')} style={{ borderBottomStyle: window.location.href === 'http://localhost:3000/services' ? 'solid' : 'none' }}>Services</h1>
      </div>
      <div className='nova__navbar-links_text_view'>
        <h1 onClick={() => navigate('/specials')} style={{ borderBottomStyle: window.location.href === 'http://localhost:3000/specials' ? 'solid' : 'none' }}>Specials</h1>
      </div>
      <div className='nova__navbar-links_text_view'>
        <h1 onClick={() => navigate('/products')} style={{ borderBottomStyle: window.location.href === 'http://localhost:3000/products' ? 'solid' : 'none' }}>Products</h1>
      </div>
      <div className='nova__navbar-links_text_view'>
        <h1 onClick={() => navigate('/reviewspage')} style={{ borderBottomStyle: window.location.href === 'http://localhost:3000/reviewspage' ? 'solid' : 'none' }}>Reviews</h1>
      </div>
      <div style={{ backgroundColor: window.location.href === 'http://localhost:3000/bookingpage' ? '#ffffff' : '#292929' }} className='nova__navbar-links_book_now_button'>
        <h2 style={{ color: window.location.href === 'http://localhost:3000/bookingpage' ? '#EE509C' : '#ffffff' }} onClick={() => navigate('/bookingpage')}>Book Now</h2>
      </div>
      <div className='nova__navbar-links_text_view'>
        <h1 onClick={() => navigate('/contactpage')} style={{ borderBottomStyle: window.location.href === 'http://localhost:3000/contactpage' ? 'solid' : 'none' }}>Contact Us</h1>
      </div>
    </>
  )

  return (
    <div className="nova__navbar">
      <div className="nova__navbar-links">
        <div className="nova_navbar-links_container">
          <Menu />
        </div>
        <div
          onClick={() => navigate("/profile")}
          className="nova_navbar-profile_view"
        >
          <img alt="" src={profileIcon} />
        </div>
      </div>
      <div className="nova__navbar-menu">
        {toggleMenu ? (
          <img
            alt="Close"
            onClick={() => setToggleMenu(!toggleMenu)}
            src={close}
            className="nova__navbar_closeIcon"
          />
        ) : (
          <img
            alt="Menu"
            onClick={() => setToggleMenu(!toggleMenu)}
            src={menu}
            className="nova__navbar_menuIcon"
          />
        )}
        {toggleMenu && (
          <div className="nova__navbar-menu_container scale-up-center">
            <div className="nova__navbar-menu_container_links">
              <Menu />
            </div>
            <h5>Mon - Sat 10 Am to 8 Pm</h5>
            <h5>Sun 11 Am to 6 Pm</h5>
            <h5>+1 5654 4658 23</h5>
            <div
              onClick={() => navigate("/login")}
              className="nova-navBar_button"
            >
              <h6>Login</h6>
            </div>
            <div className="nova-navBar_button">
              <h6>Sign Up</h6>
            </div>
          </div>
        )}
        <div className="nova_navbar-logo_view">
          <img alt="" src={logo} />
        </div>
        <div className="nova_navbar-profile_view">
          <img alt="" src={profileIcon} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
