import React, { useState } from "react";
import Auth from "../../layouts/Auth";
import logo from "../../assets/growthsense.png";
import { Link, useNavigate} from "react-router-dom";
import Button from "../../Components/Button";
import { Formik, Form } from "formik";
import FormikController from "../../Components/Formik/FormikController";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);


  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .matches (/\S+@\S+\.\S+/, "Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
    .oneOf ([Yup.ref("password"), null],'Passwords must match')
    .required("Confirm your password"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // Simulate a successful registration
    setTimeout(() => {
      alert("Registration successful!");
      navigate("/signin");
      setSubmitting(false);
    }, 2000);
  };



  return (
    <Auth>
      <Formik initialValues={initialValues} 
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
              {({isSubmitting}) => ( 
        <Form className="form-container">
          <div>
            <div className="flex justify-center mb-2 ">
              <img src={logo} alt="" className=" w-[100px]" />
            </div>
            <div className="flex justify-center text-xl text-blue-950 font-bold">
              Create an account
            </div>
            <FormikController
              control="input"
              type="fullname"
              name="fullname"
              label="Full name"
              Placeholder="Enter your name"
            />

            <FormikController
              control="input"
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
            <div className="relative">
            <FormikController
              control="input"
              type={showPassword ?"text" :"password"}
              name="password"
              label="Password"
              placeholder="Enter your password"
              className="pr-8"
            />
            <span
                  className="absolute inset-y-0 right-2 flex items-center cursor-pointer pr-2 mt-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                </div>

                <div className="relative">
            <FormikController
              control="input"
              type={showconfirmPassword ?"text" :"password"}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm your password"
              className="pr-8"
            />
            <span
                  className="absolute inset-y-0 right-2 flex items-center cursor-pointer pr-2 mt-5 "
                  onClick={() => setShowconfirmPassword(!showconfirmPassword)}
                >
                  {showconfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                </div>

            <div className="mt-4">
              <Button 
              type='submit'
              label="Sign Up"
              disabled={isSubmitting}
              ></Button>
            </div>

            <div className="text-left text-sm text-gray-600">
              <p className="mt-2">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-blue-800 font-norm hover:underline"
                >
                  {" "}
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </Form>
          )}
      </Formik>
    </Auth>
  );
};
export default SignUp;
