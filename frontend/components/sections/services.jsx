import React from 'react'

const Services = () => {
  return (
    <div className="rounded-lg h-[460px] bg-[url('https://c.animaapp.com/blEGt9Dj/img/mask-group.png')]  bg-no-repeat bg-fixed bg-center  bg-cover">
     <div className="pt-44 flex flex-col lg:flex-row gap-8 justify-center items-start py-16">
  {/* Card 1 */}
  <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 w-[300px]">
    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
      <img
        src="https://c.animaapp.com/blEGt9Dj/img/group@2x.png"
        alt="Find your classroom"
        className="w-12 h-12 object-contain"
      />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-[#00072D]">Find your classroom</h3>
      <p className="text-sm text-[#36384E]">
        Search for lecture halls and classrooms so you never miss a class.
      </p>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-[#780C05]">GET STARTED</span>
      <img
        src="https://c.animaapp.com/blEGt9Dj/img/vector-5.svg"
        alt="Arrow"
        className="w-4 h-4"
      />
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 w-[300px]">
  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
      <img
        src="https://c.animaapp.com/blEGt9Dj/img/icon-calendar.svg"
        alt="Find your classroom"
        className="w-12 h-12 object-contain"
      />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-[#00072D]">Find Student Services</h3>
      <p className="text-sm text-[#36384E]">
        Need administrative help? Easily find offices for documents, financial aid, and more.
      </p>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-[#780C05]">GET STARTED</span>
      <img
        src="https://c.animaapp.com/blEGt9Dj/img/vector-5.svg"
        alt="Arrow"
        className="w-4 h-4"
      />
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 w-[300px]">
    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
      <img
        src="https://c.animaapp.com/blEGt9Dj/img/group-684@2x.png"
        alt="Find Transport & Parking"
        className="w-12 h-12 object-contain"
      />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-[#00072D]">Find Transport & Parking</h3>
      <p className="text-sm text-[#36384E]">
        Check bus stops, shuttle routes, and the best parking spots.
      </p>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-[#780C05]">GET STARTED</span>
      <img
        src="https://c.animaapp.com/blEGt9Dj/img/vector-5.svg"
        alt="Arrow"
        className="w-4 h-4"
      />
    </div>
  </div>
</div>
    </div>
  )
}

export default Services
