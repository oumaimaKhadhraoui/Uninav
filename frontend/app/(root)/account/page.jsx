"use client";
import {  UserIcon, MailIcon } from 'lucide-react'
import { BookmarkIcon } from 'lucide-react'
import { MapPinIcon, TagIcon, TrashIcon } from 'lucide-react'
import { toast } from "react-toastify"; // For toast notifications
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth/me", {
          credentials: "include", // Send cookies with request
        });

        if (!res.ok) {
          router.push("/sign-in"); // Redirect if not authenticated
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
  const handleDeletePlace = async (placeId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/places/${placeId}`, {
        method: "DELETE",
        credentials: "include",
      });
  
      if (!res.ok) throw new Error("Failed to delete place");
  
      const data = await res.json();
      setUser(prev => ({
        ...prev,
        savedPlaces: data.savedPlaces,
      }));
      toast.success("Delete successful! 🎉");
  
  
    } catch (err) {
      toast.error("Failed to delete ❌");
      console.error("Error deleting place:", err);
    }
  };
  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <div className="bg-white w-[60%] justify-self-center rounded-xl shadow-md p-6 mb-8">
      <div className="flex flex-col justify-content-center justify-self-center items-center md:items-center gap-6">
        <div className="bg-[#780C05]/10 rounded-full p-4">
          <UserIcon size={48} className="text-[#780C05]" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome, {user.username}
          </h1>
          <div className="flex items-center text-gray-600 mb-1">
            <MailIcon size={16} className="mr-2" />
            <p>{user.email}</p>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPinIcon size={16} className="mr-2" />
            <p>{user.savedPlaces.length} saved places</p>
          </div>
        </div>
        <button className="bg-[#780C05] hover:bg-[#780C05]/90 text-white py-2 px-4 rounded-md transition-all">
          Edit Profile
        </button>
      </div>
    </div>
    <div>
    
      <div className="flex items-center pr-10 justify-center gap-3 mt-16">
      <BookmarkIcon size={50} className="text-[#780C05] mb-5" />
        <div className="flex-col justify-center items-center">
          
        <h2 className="text-5xl font-bold text-center text-[#00072D]">Your Bookmarks
        </h2>
    <div className="mt-4 h-2 w-32 bg-[#780C05] mx-auto rounded-full"></div>
    </div>
      </div>
      {user.savedPlaces.length === 0 ? (
        <div className="bg-white my-10 rounded-xl p-8 text-center">
          <BookmarkIcon size={48} className="mx-auto mb-4 text-gray-300" />
          <p className="text-gray-500 text-lg">
            You haven't bookmarked any places yet.
          </p>
          <Link href="/map">
          <button className="mt-4 bg-[#780C05] hover:bg-[#780C05]/90 text-white py-2 px-4 rounded-md transition-all">
            Explore Places
          </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
          {user.savedPlaces.map((place) => (
 <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:translate-1 transition-shadow">
 <div className="relative">
   <img
     src="https://rami.tn/wp-content/uploads/2023/06/FST.webp"
     alt={place.name}
     className="w-full h-48 object-cover"
   />
   <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white cursor-pointer transition-colors"
   onClick={() => handleDeletePlace(place._id)}>
     <TrashIcon size={16} className="text-[#780C05]" />
   </button>
   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
     <h3 className="font-bold text-xl text-white">{place.name}</h3>
   </div>
 </div>
 <div className="p-4 space-y-3">
   <div className="flex items-center gap-2">
     <TagIcon size={16} className="text-[#780C05]" />
     <p className="text-gray-700">{place.category}</p>
   </div>
   <div className="flex items-center gap-2">
     <MapPinIcon size={16} className="text-[#780C05]" />
     <p className="text-gray-700 text-sm">
       {place.location.coordinates[0].toFixed(4)},{' '}
       {place.location.coordinates[1].toFixed(4)}
     </p>
   </div>
   <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md transition-colors text-sm">
     View Details
   </button>
 </div>
</div>          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default AccountPage;
