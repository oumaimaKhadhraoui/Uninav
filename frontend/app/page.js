import Events from "@components/components/sections/events ";
import Explore from "@components/components/sections/explore ";
import Help from "@components/components/sections/help ";

export default function Home() {
    return (

              <div className=" flex justify-center">
                <div className="w-full max-w-[1440px]">
    
          
                  {/* Hero Section */}
                  <section className="relative rounded-2xl mt-7 text-center bg-[url('https://c.animaapp.com/blEGt9Dj/img/image-2.png')]  bg-no-repeat bg-fixed bg-bottom bg-cover h-[660px] py-16 px-8">
                    {/* Shader Layer */}
                    <div className="absolute inset-0 rounded-2xl bg-black/25"></div>                   
                    {/* Call to Action Section */}
                    <div className="flex flex-col items-center justify-center  py-16">
                        <div className="text-center z-10">
                            {/* "Find Your Everything Today!" Section */}
                            <div className="flex flex-col items-center space-y-4">
                            <div className="text-4xl font-bold text-white">Find</div>
                            <div className="text-4xl font-bold text-[#00072D]">Your</div>
                            <div className="text-6xl font-extrabold text-white">Everything</div>
                            <p className="text-4xl font-bold text-[#00072D]">
                                <span className="text-[#780C05]">Today</span>{" "}
                                <span className="text-[#00072D]">!</span>
                            </p>
                            </div>

                            {/* Subtitle */}
                            <p className="mt-8 text-lg font-medium text-[#00072D]">
                            The Ultimate Guide to FST University
                            </p>
                        </div>
                        </div>
                    
                  </section>
                  <section className="text-center py-16  text-white">

                    <p className="text-lg font-medium text-[#00072D] leading-relaxed">
                      Our website improves communication and interaction within the
                      academic community. By centralizing university events and local
                      deals, it offers a practical tool for students while strengthening
                      the sense of belonging and connection. This platform provides easy
                      access to essential information and encourages active participation
                      in university life.
                    </p>
                    <button className="mt-8 bg-[#780C05] text-white font-semibold py-3 px-8 rounded-lg">
                      GET STARTED
                    </button>
                  </section>
          
                  {/* Featured Events Section */}
                 <Events/>
          
                  
                    {/* Explore Section */}
                    <Explore/>
            
                    {/* Help Section */}
                    <Help/>
  
          
        </div>
      </div>
    );
  }