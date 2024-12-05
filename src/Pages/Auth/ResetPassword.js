import React, { useState } from 'react';
import Auth from '../../layouts/Auth';
import logo from '../../assets/growthsense.png';
import Button from '../../Components/Button';
import { Formik, Form } from 'formik';
import FormikController from '../../Components/Formik/FormikController';
import * as Yup from 'yup';

const ResetPassword = () => {
  
  const initialValues = {
    email : "",
  }

  const validationSchema = Yup.object({
    email: Yup.string()
    .email("Invalid email format")
    .matches (/\S+@\S+\.\S+/, "Invalid email format")
    .required("Email is required")
  })

  return (
    <Auth>
      <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      >
        <Form className='form-container'>
          <div>
            <div className="flex justify-center mb-2">
              <img src={logo} alt=''
                className=" w-[100px]"
              />
            </div>
            <div className='flex justify-center text-xl font-bold text-blue-950'>
              Forgot password
            </div>
            <FormikController
              control="input"
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
            />

            <div className='mt-4'>
              <Button label="Reset password">

              </Button>
            </div>
            <div className="text-left text-sm mt-3 flex justify-center">
              <a href="signin" className="hover:underline text-blue-800">
                Back to Sign In?
              </a>
            </div>
          </div>
        </Form>
      </Formik>
    </Auth>
  )
};
export default ResetPassword


 