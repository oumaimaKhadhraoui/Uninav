import React from 'react'

const Explore = () => {
  return (
    <div>
      {/* Explore Section */}
      <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-[#00072D]">Explore Your Campus</h2>
            <div className="mt-4 h-2 w-32 bg-[#780C05] mx-auto rounded-full"></div>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {/* Card 1 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px]">
                <img
                  src="https://c.animaapp.com/blEGt9Dj/img/istockphoto-862661268-170667a-1@2x.png"
                  alt="Best Study Spots"
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#00072D]">Best Study Spots</h3>
                  <p className="text-sm text-[#7A1F1C] mt-2">
                    Quiet corners & group-friendly spaces
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px]">
                <img
                  src="https://c.animaapp.com/blEGt9Dj/img/istockphoto-1399490449-170667a@2x.png"
                  alt="Affordable Eats & Cafés"
                  
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#00072D]">
                    Affordable Eats & Cafés
                  </h3>
                  <p className="text-sm text-[#7A1F1C] mt-2">
                    Where students love to hang out
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px]">
                <img
                  src="https://c.animaapp.com/blEGt9Dj/img/istockphoto-1254127323-170667a@2x.png"
                  alt="Hidden Gems"
                 
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#00072D]">Hidden Gems</h3>
                  <p className="text-sm text-[#7A1F1C] mt-2">
                    Must-visit spots for relaxation or fun
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Explore
