import React from 'react'

const Events = () => {
  return (
    <div>
        {/* Featured Events Section */}
        <section className="text-center py-16">
                    <h2 className="text-3xl font-bold text-[#00072D]">
                      Featured Events & Student Clubs
                    </h2>
                    <div className="mt-4 h-2 w-32 bg-[#780C05] mx-auto rounded-full"></div>
                    <p className="mt-8 text-lg text-[#00072D]">
                      Stay in the loop with the latest events, student clubs, and
                      opportunities to connect.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 mt-12">
                      {/* Event Card 1 */}
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px]">
                        <img
                          src="https://c.animaapp.com/blEGt9Dj/img/istockphoto-1192947841-170667a@2x.png"
                          alt="Event 1"
                          className="w-full h-[200px] object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-semibold text-[#00072D]">
                            Tech Innovators Club
                          </h3>
                          <p className="text-sm text-[#7A1F1C] mt-2">
                            Explore the latest in technology and innovation.
                          </p>
                        </div>
                      </div>
                      {/* Event Card 2 */}
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px]">
                        <img
                          src="https://c.animaapp.com/blEGt9Dj/img/istockphoto-1396019181-170667a@2x.png"
                          alt="Event 2"
                          className="w-full h-[200px] object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-semibold text-[#00072D]">
                            Astronomy & Arts Hub
                          </h3>
                          <p className="text-sm text-[#7A1F1C] mt-2">
                            Dive into the wonders of the universe and creative arts.
                          </p>
                        </div>
                      </div>
                      {/* Event Card 3 */}
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px]">
                        <img
                          src="https://c.animaapp.com/blEGt9Dj/img/istockphoto-1226452601-170667a@2x.png"
                          alt="Event 3"
                          className="w-full h-[200px] object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-semibold text-[#00072D]">
                            Business & Startups Society
                          </h3>
                          <p className="text-sm text-[#7A1F1C] mt-2">
                            Learn and grow with like-minded entrepreneurs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="mt-8 bg-[#780C05] text-white font-semibold py-3 px-8 rounded-lg">
                      SEE ALL EVENTS
                    </button>
                  </section>
      
    </div>
  )
}

export default Events
