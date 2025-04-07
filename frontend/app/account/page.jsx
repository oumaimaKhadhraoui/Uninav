"use client"; // If using App Router (app directory)

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [bookmarkedPlaces, setBookmarkedPlaces] = useState([]);

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
  useEffect(() => {
    const fetchBookmarkedPlaces = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/places/bookmarked", {
          credentials: "include", // Include cookies for authentication
        });
        const data = await res.json();
        setBookmarkedPlaces(data.bookmarkedPlaces);
      } catch (err) {
        console.error("Error fetching bookmarked places:", err);
      }
    };

    fetchBookmarkedPlaces();
  }, []);
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      {/* Display more user details */}
      <h1>Your Bookmarked Places</h1>
      <ul>
        {bookmarkedPlaces.map((place) => (
          <li key={place._id}>
            <h2>{place.name}</h2>
            <p>Category: {place.category}</p>
            <p>Coordinates: {place.location.coordinates.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountPage;
