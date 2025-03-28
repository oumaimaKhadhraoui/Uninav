import Map from "@components/components/map ";
import Events from "@components/components/sections/events ";
import Explore from "@components/components/sections/explore ";
import Help from "@components/components/sections/help ";
import Services from "@components/components/sections/services ";

export default function Home() {
    return (
    <div className=" flex justify-center">
        <div className="w-full max-w-[1440px]">
        {/*Hero section */}
          <div className="grid grid-cols-2 items-center">
            <div className="pl-16 pb-16 space-y-3"><h2 className="text-6xl  ">FIND YOUR EVERYTHING TODAY </h2><h5>The Ultimate Guide to FST University</h5><h1 className="text-[110px] text-[#780C05] ">UNINAV</h1></div>
            <div className=" h-screen overflow-hidden"><Map/></div>
          </div>
          <section className="text-center pb-12 items-center justify-items-center text-white  md:grid md:grid-cols-2 gap-10">
          <div className="relative rounded-2xl mt-7 text-center bg-[url('https://c.animaapp.com/blEGt9Dj/img/image-2.png')]  bg-no-repeat  bg-center bg-cover h-[400px] w-full py-16 px-8">
   <div className="absolute inset-0 rounded-2xl bg-black/25"></div>                   
       </div>
                    <div className=" items-center justify-items-end w-[90%]">
                        <h2 className="text-4xl mb-4 font-bold text-[#00072D] justify-self-start md:mt-0 mt-10">Who Are We?</h2>
                        <p className="text-lg font-medium text-[#00072D] w-[80%] justify-self-start text-left items-center ">
                      Our website improves communication and interaction within the
                      academic community. By centralizing university events and local
                      deals, it offers a practical tool for students while strengthening
                      the sense of belonging and connection. This platform provides easy
                      access to essential information and encourages active participation
                      in university life.
                    </p>
                    <button className="mt-8 bg-[#780C05] text-white font-semibold py-3 px-8 rounded-lg items-self-end lg:mr-20 ">
                      GET STARTED
                    </button></div>
                  </section>
          
                 
          
                  {/* Featured Events Section */}
                 <Events/>
          
                  {/*services section */}
          <Services/>
                    {/* Explore Section */}
                    <Explore/>
            
                    {/* Help Section */}
                    <Help/>
  
          
        </div>
      </div>
    );
  }
  
   
   
 