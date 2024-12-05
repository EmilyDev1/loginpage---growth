import React, { useState } from 'react';
import logo from '../../assets/growthsense.png';
import '../../App.css';
import { Link } from 'react-router-dom';
import Auth from '../../layouts/Auth';
import Button from '../../Components/Button';
import { Formik, Form } from 'formik';
import FormikController from '../../Components/Formik/FormikController';
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';



const SignIn = () => {
  const navigate = useNavigate();

  const initialValues = {
    email:"",
    password :""
  }

  const validationSchema = Yup.object({
    email: Yup.string()
    .email("Invalid email format")
    .matches (/\S+@\S+\.\S+/, "Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required")
  })

  const handleSubmit =(values, { setSubmitting}) => {
    console.log(values);
    navigate('/dashboard');
  }
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Auth>

      <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
       {({ errors, touched, isSubmitting}) => (
        <Form className='form-container'>
          <div>
            <div className="flex justify-center mb-2">
              <img src={logo} alt='' className="w-[100px]" />
            </div>
            <div className='text-center text-xl text-blue-950 font-bold'>
                Sign in to your account
            </div>
            <div>
            <FormikController 
              control="input"
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              
            />
            {errors.email && touched.email && (
                  <div className="text-red-500 text-sm"></div>
                )}
              </div>
              <div className='relative'>
            <FormikController
              control="input"
              type={showPassword ?"text" :"password"}
              name="password"
              label="Password"
              placeholder="Enter your password"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
  
            />
            {errors.password && touched.password && (
                  <div className="text-red-500 text-sm"></div>
                )}
                
           <button 
           className='absolute inset-y-0 right-2 flex items-center cursor-pointer pr-2 mt-5'
           onClick={() => setShowPassword(!showPassword)}
           >     
              
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                
             </button> 
             </div>

            <div className='mt-4'>
              <Button
                type='submit' 
                disabled={isSubmitting}
                label="Sign in"/>
             
            </div>
            <div className="text-left text-sm mt-3">
              <a href="forgotpassword" className="hover:underline text-blue-800">
                Forgot Password?
              </a>
              <p className="mt-2">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-800 font-normal hover:underline"> Sign Up</Link>
              </p>
            </div>


          </div>
        </Form>
       )}
      </Formik>
    </Auth>
  );
};

export default SignIn;

