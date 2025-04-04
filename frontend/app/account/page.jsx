"use client"; // If using App Router (app directory)

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch user info from backend
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth/me", {
          credentials: "include", // Send cookies if using sessions
        });

        if (!res.ok) {
          router.push("/signin"); // Redirect if not authenticated
          return;
        }

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      {/* Display more user details */}
    </div>
  );
};

export default AccountPage;
