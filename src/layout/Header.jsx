import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { noxfolioUtilits } from "../../utility";
import SideBar from "./SideBar";

const Header = ({ data, Menu }) => {
  useEffect(() => {
    noxfolioUtilits.stickyNav();
  }, []);

 
  const toggleSidebar = () => {
        document.querySelector("body").classList.add("side-content-visible");
        console.log('visible');
        
      };

  const [toggle, setToggle] = useState(false);

  return (
    
    <header className="main-header  menu-absolute">
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rel d-flex align-items-center" style={{display:'flex',alignItems:'center'}}>
            <div className="logo-outer">
              <div className="logo">
                <Link to="/" className="text-white t">
                  {data.name}
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link to="/">{data.name}</Link>
                  </div>
                  <button
                    type="button"
                    className="navbar-toggle  me-4"
                    onClick={() => setToggle(!toggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className={`navbar-collapse clearfix ${toggle ? "show" : ""}`}>
                  {Menu ? <Menu /> : <SideBar />}
                </div>
              </nav>
            </div>
            <div className="menu-btns d-none d-lg-block">
              <div className="menu-sidebar">
                <button onClick={() => toggleSidebar()}>
                  <img
                    src="src/assets/images/shape/sidebar-tottler.svg"
                    alt="Toggler"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
   
  );
};

export default Header;
