import React from "react";
import "../styles/Login.css";
import Buttons from "../components/Buttons";
import Heading from "../components/Heading";
import Paragraph from "../components/paragraph";
import FormPropsTextFields from "../components/InputField";
import PageContainer from "../components/PageContainer";
const Login = () => {
  return (
    <>
      <PageContainer className="login">
        <Heading>
          Signin to your <br /> PopX account
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit,
        </Paragraph>
        <FormPropsTextFields
          fieldText="Email Address"
          placeholder="Enter email address"
          type="text"
        />
        <FormPropsTextFields
          fieldText="Password"
          placeholder="Enter password"
          type="password"
        />
        <Buttons path="/accountsettings" className="signUp_login_btn">
          login
        </Buttons>
      </PageContainer>
    </>
  );
};

export default Login;
