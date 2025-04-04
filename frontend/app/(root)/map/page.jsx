"use client"
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  { name: "Faculty of sciences of tunis", lat: 36.8338481, lng: 10.1465992, category: "faculty" },
  { name: "Bâtiment Principal (Sciences)", lat: 36.8340366, lng: 10.1454084, category: "faculty" },
  { name: "Département d'Informatique", lat: 36.8351431, lng: 10.145, category: "department" },
  { name: "Salles de l'informatique", lat: 36.8354213, lng: 10.1438725, category: "department" },
  { name: "Amphithéâtre A", lat: 36.834057, lng: 10.14549, category: "amphitheater" },
  { name: "Amphithéâtre B", lat: 36.83412, lng: 10.145461, category: "amphitheater" },
  { name: "Clubs", lat: 36.833469, lng: 10.145445, category: "clubs" },
  { name: "Centre Alyssa", lat: 36.835016, lng: 10.148623, category: "center" },
  { name: "Restaurant Universitaire", lat: 36.831485, lng: 10.145391, category: "cafe" },
  { name: "BIAT Bank", lat: 36.835254, lng: 10.149956, category: "bank" },
];

export default function UniNav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("");
  const [savedPlaces, setSavedPlaces] = useState([]);

  const handleSavePlace = (name) => {
    if (!savedPlaces.includes(name)) {
      setSavedPlaces([...savedPlaces, name]);
    }
  };
  const customIcon = new L.Icon({
    iconUrl: "https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png",
    iconSize: [30, 30], // Customize size as needed
    iconAnchor: [15, 30], // Anchor the icon at the bottom
    popupAnchor: [0, -30], // Position the popup above the marker
  });
  return (
    <div className="font-serif bg-[#FCF4E4] text-[#00072D]">

      {/* Search Bar */}
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
      <h2 className="text-center text-xl font-bold">🗺️ Explore Your Campus</h2>
      <MapContainer center={[36.8345, 10.1465]} zoom={18} className="h-[500px] w-11/12 mx-auto my-5 rounded-lg">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations
          .filter((loc) => loc.name.toLowerCase().includes(searchTerm) && (filteredCategory === "" || loc.category === filteredCategory))
          .map((loc) => (
            <Marker key={loc.name} position={[loc.lat, loc.lng]} icon={customIcon}>
              <Popup>
                <b>{loc.name}</b>
                <br />
                <button
                  onClick={() => handleSavePlace(loc.name)}
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
