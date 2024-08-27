import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "../components/label";
import { Input } from "postcss";

const SignUpPage = () => {
  const { handleSubmit, control } = useForm({});
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal font-medium text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link className="font-medium underline text-primary" to="/sign-in">
          Sign In
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2">
        <img srcSet="./google.png 20x" alt="" />
        <span>Sign up with google</span>
      </button>

      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2">
        Or sign up with email
      </p>

      <form action="">
        <div className="flex flex-col gap-y-3">
          <Label>Fullname</Label>
          <Input control={control} name="fullName"></Input>
        </div>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
