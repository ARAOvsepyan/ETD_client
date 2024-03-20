import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footers/MainFooter";
import MainNavbar from "../components/Navbars/MainNavbar";
import Section1 from "../containers/Section1";
import Section3 from "../containers/Section3";
import Section4 from "../containers/Section4";
import Section2 from "../containers/Section2";

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <Section1 />
      <Box sx={{ bgcolor: "background.main", position: "relative" }}>
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
