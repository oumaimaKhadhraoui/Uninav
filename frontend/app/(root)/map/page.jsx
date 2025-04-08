"use client";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function UniNav() {
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("");
  const [savedPlaces, setSavedPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const res = await fetch(" http://localhost:5000/api/places");
      const data = await res.json();
      setPlaces(data);
      console.log(places)
    };

    fetchPlaces();
  }, []);

  const handleSavePlace = async (place) => {
    console.log("place._id:", place._id);  // Ensure place._id is valid
  
    if (!savedPlaces.includes(place.name)) {
      setSavedPlaces([...savedPlaces, place.name]);
  
      try {
        const res = await fetch("http://localhost:5000/api/places/save", {
          method: "POST",
          credentials: "include", // Send cookies with request
          headers: {
            "Content-Type": "application/json", // Set the Content-Type header
          },
          body: JSON.stringify({ placeId: place._id }),  // Ensure place._id exists
        });
  
        if (!res.ok) throw new Error("Failed to save place");
        const data = await res.json();
  
        console.log("Saved places from server:", data.savedPlaces);
      } catch (error) {
        console.error("Error saving place:", error);
      }
    }
  };

  const customIcon = new L.Icon({
    iconUrl: "https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  return (
    
    <div className="font-serif bg-[#FCF4E4] text-[#00072D]">
<h2 className="text-5xl font-bold text-center text-[#00072D] mt-16">Explore Your Campus</h2>
<div className="mt-4 h-2 w-32 bg-[#780C05] mx-auto rounded-full my-10"></div>
      {/* Search Bar */}
      <div className="text-center my-5">
        <input
          type="text"
          placeholder="🔍 Search for places..."
          className="w-1/2 p-3 text-lg border-2 border-gray-300 rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 my-4">
        {["amphitheater", "cafe", "department", "faculty"].map((filter) => (
          <button
            key={filter}
            className="bg-[#B58E40] text-white px-4 py-2 rounded-lg"
            onClick={() => setFilteredCategory(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Map */}
      <h2 className="text-center text-xl font-bold">🗺️ Save your favorites!</h2>
      <MapContainer center={[36.8345, 10.1465]} zoom={18} className="h-[500px] w-11/12 mx-auto my-5 rounded-lg">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {places
          .filter((loc) => loc.name.toLowerCase().includes(searchTerm) && (filteredCategory === "" || loc.category === filteredCategory))
          .map((loc) => (
            <Marker key={loc._id} position={[loc.location.coordinates[1], loc.location.coordinates[0]]} icon={customIcon}>
              <Popup>
                <b>{loc.name}</b>
                <br />
                <button
                  onClick={() => handleSavePlace(loc)}
                  className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded-lg"
                >
                  ⭐ Save
                </button>
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      {/* Saved Places */}
      <section className="text-center my-8">
        <h2 className="inline-block bg-gray-300 px-6 py-2 rounded-lg text-lg font-bold">⭐ Your Saved Places</h2>
        <div className="mt-4">
          {savedPlaces.map((place) => (
            <p key={place} className="text-lg">⭐ {place}</p>
          ))}
        </div>
      </section>
      
    </div>
  );
}
