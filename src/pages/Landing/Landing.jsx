import React from "react";
import { MainContainer, Frame } from "./LandingStyle";
import TitleSection from "./TitleSection";
import DeptSection from "./DeptSection";
import Footer from "../../components/footer/Footer";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";

const Landing = () => {
  return (
    <MainContainer>
      <DepartmentHeader />
      <Frame>
        <TitleSection />
        <DeptSection />
        <Footer />
      </Frame>
    </MainContainer>
  );
};

export default Landing;
