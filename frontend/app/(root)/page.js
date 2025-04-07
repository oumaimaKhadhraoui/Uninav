import Map from "@components/components/map ";
import Events from "@components/components/sections/events ";
import Explore from "@components/components/sections/explore ";
import Help from "@components/components/sections/help ";
import Services from "@components/components/sections/services ";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-[#FEF6E4] text-[#00072D]">
      <div className="flex justify-center">
        <div className="w-full max-w-[1440px]">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="px-6 md:pl-16 pb-10 space-y-3 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-6xl leading-tight">
                FIND YOUR EVERYTHING TODAY
              </h2>
              <h5 className="text-md md:text-lg">
                The Ultimate Guide to FST University
              </h5>
              <h1 className="text-[50px] sm:text-[80px] md:text-[110px] text-[#780C05] leading-none">
                UNINAV
              </h1>
            </div>
            <div className="flex justify-center h-[300px] md:h-screen overflow-hidden px-4">
              <div className="scale-[0.9] md:scale-100 max-w-full">
                <Map />
              </div>
            </div>
          </div>

          {/* Who Are We Section */}
          <section className="text-center px-4 md:px-16 pb-12 md:grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative rounded-2xl mt-7 bg-[url('https://c.animaapp.com/blEGt9Dj/img/image-2.png')] bg-no-repeat bg-center bg-cover h-[300px] md:h-[400px] w-full">
              <div className="absolute inset-0 rounded-2xl bg-black/25"></div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-[90%] mt-8 md:mt-0 text-left">
              <h2 className="text-3xl md:text-4xl mb-4 font-bold">Who Are We?</h2>
              <p className="text-base md:text-lg font-medium mb-6">
                Our website improves communication and interaction within the
                academic community. By centralizing university events and local
                deals, it offers a practical tool for students while
                strengthening the sense of belonging and connection. This
                platform provides easy access to essential information and
                encourages active participation in university life.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-[#780C05] text-white font-semibold py-3 px-8 rounded-lg">
                  GET STARTED
                </button>
              </div>
            </div>
          </section>

          {/* Additional Sections */}
          <Events />
          <Services />
          <Explore />
          <Help />
        </div>
      </div>
    </div>
  );
}
