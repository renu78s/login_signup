import React from "react";
import "../styles/home.css";
import Buttons from "../components/Buttons";
import Heading from "../components/Heading";
import Paragraph from "../components/paragraph";
import PageContainer from "../components/PageContainer";
const Home = () => {
  return (
    <>
      <PageContainer className="home ">
        <Heading>Welcome to PopX</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit,
        </Paragraph>
        <Buttons path="/signup" className="home_btn_create">
          Create Account
        </Buttons>
        <Buttons path="/login" className="home_btn_login">
          Already Registered? Login
        </Buttons>
      </PageContainer>
    </>
  );
};

export default Home;
