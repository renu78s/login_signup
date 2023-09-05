import React from "react";
import "../styles/SignUp.css";
import Buttons from "../components/Buttons";
import Heading from "../components/Heading";
import FormPropsTextFields from "../components/InputField";
import PageContainer from "../components/PageContainer";
const SignUp = () => {
  return (
    <>
      <PageContainer className="signup">
        <Heading>
          Create your <br /> PopX account
        </Heading>
        <form action="">
          <div className="signUp_input_container">
            <FormPropsTextFields
              fieldText="Full Name"
              star="*"
              placeholder="Marry Doe"
              type="text"
            />
            <FormPropsTextFields
              fieldText="Phone number"
              star="*"
              placeholder="Marry Doe"
              type="number"
            />
            <FormPropsTextFields
              fieldText="Email address*"
              star="*"
              placeholder="Marry Doe"
              type="email"
            />
            <FormPropsTextFields
              fieldText="Password"
              star="*"
              placeholder="Marry Doe"
              type="password"
            />
            <FormPropsTextFields
              fieldText="Company name"
              placeholder="Marry Doe"
              type="password"
            />
            <div className="radio_container">
              <p htmlFor="yes">
                Are you an Agency?<span>*</span>
              </p>
              <input type="radio" name="agency" id="yes" />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="agency" id="no" />
              <label htmlFor="yes">No</label>
            </div>
          </div>
          <Buttons path="/accountsettings" className="signup_btn_create">
            Create Account
          </Buttons>
        </form>
      </PageContainer>
    </>
  );
};

export default SignUp;
