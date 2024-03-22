import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footers/MainFooter";
import MainNavbar from "../components/Navbars/MainNavbar";
import HomeSection1 from "../containers/HomeSections/HomeSection1";
import HomeSection3 from "../containers/HomeSections/HomeSection3";
import HomeSection4 from "../containers/HomeSections/HomeSection4";
import HomeSection2 from "../containers/HomeSections/HomeSection2";

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <HomeSection1 />
      <Box sx={{ bgcolor: "background.main", position: "relative" }}>
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
