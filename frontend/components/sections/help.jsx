import React from 'react'

const Help = () => {
  return (
    <div>
      {/* Help Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-16 px-8">
            <img
              src="https://c.animaapp.com/blEGt9Dj/img/istockphoto-1398009285-612x612-1.png"
              alt="Help img"
             
              className="rounded-lg"
            />
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#780C05]">Need Help on Campus?</h2>
              <p className="text-lg text-[#00072D] mt-4">
                We’ve got you covered! Find quick answers or get support from the right people.
                Can’t find what you’re looking for? Contact our support team for help.
              </p>
              <button className="mt-8 bg-[#00072D] text-white font-semibold py-3 px-8 rounded-lg">
                ASK A QUESTION
              </button>
            </div>
          </div>
  
    </div>
  )
}

export default Help
