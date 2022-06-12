import loginImg from "./1.png";
import React, { useState } from "react";
import "./Login.css";
import { Button, PasswordInput, TextInput, Center } from "@mantine/core";
import {} from "@mantine/core";
import { At } from "tabler-icons-react";
import { Lock } from "tabler-icons-react";
import { Checkbox } from "@mantine/core";

import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value !== "" ? null : "Invalid password"),
    },
  });

  const handleSubmit = async (event) => {
    setErrorMessages({});
    setLoading(true);

    var { email, password } = event;
    console.log(event);

    // if keep me logged in is false then save in session else save in local storage

    const body = { email, password };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await axios({
        method: "post",
        url: "https://a-wep.herokuapp.com/auth/user/signin",
        data: body,
        headers: headers,
      });
      setLoading(false);
      console.log(response.data);

      if (response.data.status === "error") {
        setErrorMessages({
          name: response.data.error.type,
          message: response.data.error.message,
        });
        showNotification({
          color: "red",
          title: `Login Failed`,
          message: `Please Try Again`,
        });
      } else {
        showNotification({
          color: "green",
          title: `Login Successfull`,
          message: `Welcome Back Dear ${response.data.userName}`,
        });
        if (response.data.data.userType === "superAdmin") {
          // navigate("/superadmin");
          console.log(response.data.data.userType);
        } else if (response.data.data.userType === "customer") {
          navigate("/vendor");
          console.log(response.data.data.userType);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderErrorMessage = (name) => {
    if (name === errorMessages.name) {
      return errorMessages.message;
    }
    // setErrorMessages({ name: '', message: '' })
  };

  return (
    <div className="login-screen">
      <div>
        <img src={loginImg} alt="" />
      </div>
      <div>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <div className="login-form-header">
            <p>Vendor Login</p>
          </div>
          <div className="login-form-body">
            <TextInput
              error={renderErrorMessage("email")}
              icon={<At />}
              size="md"
              aria-activedescendant="email"
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
          </div>

          <div className="login-form-body">
            <PasswordInput
              error={renderErrorMessage("password")}
              icon={<Lock />}
              placeholder="Password"
              label="Password"
              size="md"
              aria-activedescendant="password"
              {...form.getInputProps("password")}
            />
          </div>

          <div className="login-form-body">
            <Checkbox
              aria-activedescendant="remember me"
              label="Keep me logged in"
              color="pink"
              size="md"
              {...form.getInputProps("rememberMe", { type: "checkbox" })}
            />
          </div>
          {/*<Center style={{ marginTop: 10 }}>
            <ReCAPTCHA
              sitekey="6LdEF7MfAAAAAB_fyrcSQS4qyQrVxeno0rh60uAh"
              onChange={onChange}
            />
  </Center>*/}
          <Center>
            <Button
              type="submit"
              disabled={false}
              style={{ width: 150 }}
              loading={loading}
            >
              Login
            </Button>
          </Center>

          <div className="login-form-body">
            <Center>
              <p>Don't Have An Account?</p>
              <Link to="/signup">
                <p>SignUp</p>
              </Link>
            </Center>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
