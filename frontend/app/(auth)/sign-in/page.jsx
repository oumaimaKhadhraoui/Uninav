"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoIosMail } from "react-icons/io";
import { MdOutlineLockPerson } from "react-icons/md";
import GoogleButton from "@components/components/GoogleButton ";
import "./page.css";
import Link from "next/link";

// 🔒 Define validation schema
const loginSchema = z.object({
  email: z
  .string()
  .regex(/\@/, "Email must contain @ symbol")
  .email("Invalid email")

  ,
  
  password: z
              .string()
              .min(6, "Password must be at least 6 characters long")
              .max(50, "Password cannot exceed 50 characters")
              .regex(/[a-z]/, "Password must contain at least one lowercase letter")
              .regex(/[0-9]/, "Password must contain at least one number")
});

const Page = () => {
  const router = useRouter();

  // 🔧 Initialize form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const resData = await response.json();

      if (response.ok) {
        toast.success("Login successful! 🎉");
        router.push("/");
      } else {
        toast.error(resData.msg || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/google", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Google login successful!");
        router.push("/");
      } else {
        toast.error(data.msg || "Google login failed.");
      }
    } catch (err) {
      toast.error("Something went wrong with Google login.");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <IoIosMail />
          <input
            placeholder="Enter your Email"
            className={`input`}
            type="email"
            {...register("email")}
          />
        </div>
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <MdOutlineLockPerson />
          <input
            placeholder="Enter your Password"
            className="input"
            type="password"
            {...register("password")}
          />
        </div>
        {errors.password && <p className="text-red-700">{errors.password.message}</p>}

        <div className="flex-row">
          <span className="span">Forgot password?</span>
        </div>

        <button className="button-submit" type="submit">
          Sign In
        </button>

        <Link href="/sign-up">
          <p className="p">
            Don't have an account? <span className="span">Sign Up</span>
          </p>
          <p className="p line">Or With</p>
        </Link>

        <div className="flex-row">
          <GoogleButton onClick={handleGoogleLogin} />
        </div>
      </form>
    </div>
  );
};

export default Page;
