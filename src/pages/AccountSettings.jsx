import React from "react";
import "../styles/AccountSettings.css";
import pic from "../assets/Ellipse 114/Ellipse 114.png";
import smallPic from "../assets/Group 1585.svg";
import BadgeAvatars from "../components/Avatar";
import PageContainer from "../components/PageContainer";
import Buttons from "../components/Buttons";
const AccountSettings = () => {
  return (
    <PageContainer className="accountSettings">
      <h1>Account Settings</h1>
      <div className="intro">
        <BadgeAvatars mainImg={pic} smallImg={smallPic} />
        <div>
          <h4>Marry Doe</h4>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="para">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
      <hr />
      <Buttons path="/" className="home_btn_create">
        home
      </Buttons>
    </PageContainer>
  );
};

export default AccountSettings;
