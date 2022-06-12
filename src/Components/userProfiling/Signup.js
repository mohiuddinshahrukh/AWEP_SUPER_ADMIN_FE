import loginImg from "./1.png";
import React, { useState } from "react";
import "./Login.css";
import {
  Button,
  PasswordInput,
  TextInput,
  Center,
  RadioGroup,
  Radio,
} from "@mantine/core";

import { At, User } from "tabler-icons-react";
import { Lock } from "tabler-icons-react";
import { Checkbox } from "@mantine/core";

import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";

const axios = require("axios");

function SignUp() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [loading, setLoading] = useState(false);

  const [enabled, setEnabled] = useState(false);
  let navigate = useNavigate();
  const [value, setValue] = useState();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
      phone: "",
      name: "",
      terms: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid Email"),
      password: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/.test(
          value
        )
          ? null
          : "Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Character",
      password_confirmation: (value) =>
        value === form.values.password ? null : "Passwords do not match",

      name: (value) => (value !== "" ? null : "Please Enter Your Name"),
      phone: (value) =>
        /^(\+92)(\d{10})$/.test(value) |
        /^(\d{10})$/.test(value) |
        /^(0)(\d{10})$/.test(value)
          ? null
          : "Please Enter Valid Phone Number",
    },
  });

  const handleSubmit = async (event) => {
    setLoading(true);
    var { email, password, name, phone } = event;
    console.log(event);

    const body = {
      email,
      password,
      name,
      phone,
      userType: value,
      profileImage: "https://source.unsplash.com/u3WmDyKGsrY/",
    };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await axios({
        method: "post",
        url: "http://a-wep.herokuapp.com/auth/user/signup",
        data: body,
        headers: headers,
      });
      setLoading(false);
      console.log(response.data);

      if (response.data.status === "error") {
        setErrorMessages(response.data.error);
      } else {
        showNotification({
          color: "green",
          title: `SignUp Successfull`,
          message: `Login To Process`,
        });
        console.log("navigating");
        navigate("/login");
        console.log("navigated");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderErrorMessage = (name) => {
    if (errorMessages[name]) {
      return errorMessages[name];
    }
  };

  return (
    <div className="login-screen">
      <div>
        <img src={loginImg} alt="" />
      </div>
      <div style={{ overflowY: "scroll" }}>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <div className="login-form-header">
            <RadioGroup
              value={value}
              onChange={setValue}
              label="Select your favorite framework/library"
              description="This is anonymous"
              required
            >
              <Radio value="superAdmin" label="Super Admin" />
              <Radio value="customer" label="Customer" />
              <Radio value="venueOwner" label="Venue Owner" />
              <Radio value="vendor" label="Vendor" />
            </RadioGroup>

            <p>Customer Sign Up</p>
          </div>
          <div className="login-form-body">
            <TextInput
              error={renderErrorMessage("name")}
              // required
              icon={<User size={18} />}
              // size="md"
              aria-activedescendant="full name"
              placeholder="Full Name : John Doe"
              {...form.getInputProps("name")}
            />
          </div>
          <div className="login-form-body">
            <TextInput
              error={renderErrorMessage("email")}
              // required
              icon={<At size={18} />}
              // size="md"
              aria-activedescendant="email"
              placeholder="Email : your@email.com"
              {...form.getInputProps("email")}
            />
          </div>
          <div className="login-form-body">
            <TextInput
              error={renderErrorMessage("phone")}
              // required
              icon={<At size={18} />}
              // size="md"
              aria-activedescendant="phone"
              placeholder="Phone : +923XXXXXXXXX"
              {...form.getInputProps("phone")}
            />
          </div>
          <div className="login-form-body">
            <PasswordInput
              error={renderErrorMessage("password")}
              icon={<Lock size={18} />}
              placeholder="Password"
              // size="md"
              aria-activedescendant="password"
              {...form.getInputProps("password")}
            />
          </div>
          <div className="login-form-body">
            <PasswordInput
              error={renderErrorMessage("confirm password")}
              icon={<Lock size={18} />}
              placeholder="Confirm Password"
              // size="md"
              aria-activedescendant="confirm password"
              {...form.getInputProps("password_confirmation")}
            />
          </div>

          <div className="login-form-body">
            <Center>
              <Checkbox
                onClick={() => {
                  setEnabled(!enabled);
                }}
                aria-activedescendant="remember me"
                label={
                  <div>
                    Agree to{" "}
                    <Link to={"/termsAndConditons"}>Terms And Conditions</Link>
                  </div>
                }
                color="pink"
                // size="md"
                {...form.getInputProps("terms", {
                  type: "checkbox",
                })}
              />
            </Center>
          </div>
          {/*<Center>
            <ReCAPTCHA
              sitekey="6LdEF7MfAAAAAB_fyrcSQS4qyQrVxeno0rh60uAh"
              onChange={onChange}
            />
          </Center>
              */}
          <Center>
            <Button
              type="submit"
              disabled={false | !enabled}
              style={{ width: 150 }}
              loading={loading}
            >
              Sign Up
            </Button>
          </Center>
          <Center>
            <p style={{ paddingRight: 6 }}>Already Have An Account?</p>
            <Link to={"/Login"}>
              <p>Login</p>
            </Link>
          </Center>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
