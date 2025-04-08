"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoIosMail } from "react-icons/io";
import { MdOutlineLockPerson } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import GoogleButton from "@components/components/GoogleButton ";
import Link from "next/link";
import "./page.css";

// ✅ Zod schema
const signupSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z
    .string()
    .regex(/\@/, "Email must contain @ symbol")
    .email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(50, "Password cannot exceed 50 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

const Page = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("User registered successfully!");
        router.push("/sign-in");
      } else {
        toast.error(result.msg || "Registration failed");
      }
    } catch (error) {
      toast.error("Server error: " + error.message);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* EMAIL */}
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <IoIosMail />
          <input
            type="email"
            placeholder="Enter your Email"
            className="input"
            {...register("email")}
          />
        </div>
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}

        {/* PASSWORD */}
        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <MdOutlineLockPerson />
          <input
            type="password"
            placeholder="Enter your Password"
            className="input"
            {...register("password")}
          />
        </div>
        {errors.password && <p className="text-red-700">{errors.password.message}</p>}

        {/* USERNAME */}
        <div className="flex-column">
          <label>Username</label>
        </div>
        <div className="inputForm">
          <FaRegUser />
          <input
            type="text"
            placeholder="Enter your Username"
            className="input"
            {...register("username")}
          />
        </div>
        {errors.username && <p className="text-red-700">{errors.username.message}</p>}

        <button className="button-submit font-cinzel" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Sign Up"}
        </button>

        <Link href="/sign-in">
          <p className="p">
            Already have an account? <span className="span">Sign in</span>
          </p>
        </Link>

        <p className="p line">Or With</p>

        <div className="flex-row">
          <GoogleButton />
        </div>
      </form>
    </div>
  );
};

export default Page;
