import React, { useEffect } from "react";
import { noxfolioUtilits } from "../../utility"; // Adjust the path as needed
// import Footer from "./Footer";

import Header from "./Header";
import SideBar from "./SideBar";
import Menu from "./Menu";



const NoxfolioLayout = ({data}) => {
 
  useEffect(() => {
    noxfolioUtilits.animation(); // Typo: should be "animation"
  }, []);
  
  return (
    <div className="page-wrapper">
     
     <Header data={data} Menu={Menu} />

      <SideBar />
      {/* {children} */}
      {/* {!noFooter && <Footer footer={footer} />} */}
    </div>
  );
};

export default NoxfolioLayout;
