import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo-one1.png"; // Hubi wadada saxda ah

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // addevent listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <header className={`header-section style-4 ${headerFixed ? "headerFixed fadeInUp" : ""}`}>
      {/* header top start */}
       {/* <div className='container'>
          <div className='header-top-area'>
            <Link to="/signup" className='lab-btn me-3'>
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log in</Link>
          </div>
        </div> */}

      {/* header bottom */}
      <div className='header-bottom'>
        <div className='container'>
          <div className='header-wrapper'>
            {/* logo */}
            <div className='logo-search-acte'>
              <div className='logo'>
                <Link to={"/"}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>

            {/* menu area */}
            <div className='menu-area'>
              <div className='menu'>
              <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
              </div>

              <Link to="/signup" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
              <Link to="/login" className='d-none d-md-block'>Log in</Link>

              {/* menu toggler */}
            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
            !!!
            </div>


           {/* social toggle */}
           <div className="ellepsis-bar d-md-none" onClick={() => SETs}></div>
           <div>
           <i classNames="icofont-info-square"></i>
           </div>

            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;