
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";


export default function Signup() {

  return (
    <section className="space-y-8 w-full sm:w-auto mx-auto">
      <div className="mx-auto space-y-2.5 md:w-[400px]">
        <h1 className="font-medium text-2xl lg:text-3xl">
          <span className="text-primary">Create</span> an account
        </h1>
        <p className="leading-relaxed text-gray-500">
          Let's get you started! Please enter your details.
        </p>
      </div>

      <Formik
        initialValues={{
          name: "",
          password: "",
          confirmPassword: "",
          email: "",
        }}
        onSubmit={() => console.log('submitted')}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8 space-y-5 mx-auto md:w-[400px] mb-0">
              <>
                <div>
                  <label htmlFor="Fullname" className="sr-only">
                    Full name
                  </label>
                  <Field
                    type="text"
                    id="Fullname"
                    name="name"
                    placeholder="Your name"
                    className="field"
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="text-xs md:text-sm text-red-500 "
                  />
                </div>

                <div>
                  <label htmlFor="Email" className="sr-only">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="Email"
                    name="email"
                    placeholder="Your email"
                    className="field"
                  />

                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-xs md:text-sm text-red-500 "
                  />
                </div>
                <div>
                  <label htmlFor="Password" className="sr-only">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="Password"
                    name="password"
                    placeholder="Password"
                    className="field"
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="text-xs md:text-sm text-red-500 "
                  />
                </div>
                <div>
                  <label htmlFor="ConfirmPassword" className="sr-only">
                    Confirm password
                  </label>
                  <Field
                    type="password"
                    id="ConfirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="field"
                  />
                  <ErrorMessage
                    component="div"
                    name="confirmPassword"
                    className="text-xs md:text-sm text-red-500 "
                  />
                </div>
                <div className="flex space-x-5">
                  <button type="submit" disabled={isSubmitting} className="btn bg-lime-500">
                    Sign Up
                  </button>
                </div>
              </>
          </Form>
        )}
      </Formik>

      <p className="text-xs md:text-sm text-center">
        Already have an account?{" "}Login
      </p>
    </section>
  );
}
