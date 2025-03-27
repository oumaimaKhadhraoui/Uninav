"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For redirection
import { toast } from "react-toastify"; // For toast notifications
import { IoIosMail } from "react-icons/io";
import { MdOutlineLockPerson } from "react-icons/md";
import GoogleButton from "@components/components/GoogleButton ";
import "./page.css";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle the sign-in form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message before submitting

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Send cookies with the request
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful! 🎉");
        router.push("/"); // Redirect to home page upon successful login
      } else {
        setError(data.msg || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/google", {
        method: "GET",
        credentials: "include", // Send cookies with the request
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Google login successful!");
        router.push("/"); // Redirect to home page
      } else {
        setError(data.msg || "Google login failed.");
      }
    } catch (err) {
      setError("Something went wrong with Google login.");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <IoIosMail />
          <input
            placeholder="Enter your Email"
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <MdOutlineLockPerson />
          <input
            placeholder="Enter your Password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>} {/* Display error message */}

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
        {/* Google Button with backend integration */}
        <div className="flex-row">
          <GoogleButton onClick={handleGoogleLogin} />
        </div>
      </form>
    </div>
  );
};

export default Page;
