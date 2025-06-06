import React, { useState } from "react";
import { Link } from "react-router";

import { EyeCloseIcon, EyeIcon } from "../../assets";
import { Checkbox, Input, Label } from "../form";
import { Button } from "../ui/";
import { useAppDispatch, useForm } from "../../hooks";
import type { SignInFormDataInterface } from "../../Interfaces";
import { startLogin } from "../../store/auth/thunks";


export const SingInForm = () => {
  const dispatch = useAppDispatch();

  const { email, password, onInputChange } = useForm<SignInFormDataInterface>({
    email: "",
    password: "",
  });

  const [ShowPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({password, email});
    const user = {
      email,
      password
    }
    dispatch(startLogin(user));
    
  };

  return (
    <>
      <div className="flex flex-col flex-1">
        <div className="w-full max-w-md pt-10 mx-auto"></div>
        <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          <div>
            <div className="mb-5 sm:mb-8">
              <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                Sign In
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter your email and password to sign in!
              </p>
            </div>
            <div>
              <form onSubmit={onSubmit}>
                <div className="space-y-6">
                  <div>
                    <Label>
                      Email <span className="text-error-500">*</span>{" "}
                    </Label>
                    <Input
                      placeholder="info@gmail.com"
                      name="email"
                      type="email"
                      value={email}
                      onChange={onInputChange}
                    />
                  </div>
                  <div>
                    <Label>
                      Password <span className="text-error-500">*</span>{" "}
                    </Label>
                    <div className="relative">
                      <Input
                        type={ShowPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                      />
                      <span
                        onClick={() => setShowPassword(!ShowPassword)}
                        className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                      >
                        {ShowPassword ? (
                          <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                        ) : (
                          <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Checkbox checked={isChecked} onChange={setIsChecked} />
                      <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                        Keep me logged in
                      </span>
                    </div>
                    <Link
                      to="/reset-password"
                      className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div>
                    <Button
                      className="w-full"
                      size="sm"
                      onClick={() => onSubmit}
                    >
                      Sign in
                    </Button>
                  </div>
                </div>
              </form>

              <div className="mt-5">
                <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                  Don&apos;t have an account? {""}
                  <Link
                    to="/singup"
                    className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
