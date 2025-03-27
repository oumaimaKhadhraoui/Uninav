"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For redirection
import { toast } from "react-toastify"; // Import toast for notifications
import { IoIosMail } from "react-icons/io";
import { MdOutlineLockPerson } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import GoogleButton from "@components/components/GoogleButton ";
import Link from "next/link";
import "./page.css";

const Page = () => {
  const router = useRouter(); // For redirection

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email.includes("@")) tempErrors.email = "Invalid email";
    if (formData.password.length < 8)
      tempErrors.password = "Password must be at least 8 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("User registered successfully! 🎉");
        setTimeout(() => router.push("/"), 2000); // Redirect after 2 seconds
      } else {
        toast.error(data.msg || "Registration failed");
      }
    } catch (error) {
      toast.error("Server error: " + error.message);
    } finally {
      setLoading(false);
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
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <MdOutlineLockPerson />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
          {errors.password && <small className="error">{errors.password}</small>}
        </div>

        <div className="flex-column">
          <label>Username</label>
        </div>
        <div className="inputForm">
          <FaRegUser />
          <input
            type="text"
            name="username"
            placeholder="Enter your Username"
            value={formData.username}
            onChange={handleChange}
            className="input"
            required
          />
          {errors.username && <small className="error">{errors.username}</small>}
        </div>

        <button type="submit" className="button-submit font-cinzel" disabled={loading}>
          {loading ? "Registering..." : "Sign Up"}
        </button>

        <Link href="/sign-in">
          <p className="p">
            Already Have An Account? <span className="span">Sign in</span>
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
