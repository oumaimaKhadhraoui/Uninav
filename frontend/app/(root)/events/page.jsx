// If you're using the "app" directory, use: app/events/page.tsx
// If using "pages" directory, use: pages/events.tsx

import Calendar from "@components/components/Calender ";
import Image from "next/image";

export default function EventsPage() {
  return (
    <div className="bg-[#FCF4E4] min-h-screen py-10">
        <Calendar/>
      {/* Title */}
      <div className="bg-[#D8DDDE] rounded-xl h-[70px] w-[80%] mx-auto flex items-center justify-center mb-10">
        <p className="text-[#780C05] text-5xl font-bold">Events</p>
      </div>

      {/* Events Cards */}
      <div className="flex flex-wrap justify-around gap-6 px-6 mb-20">
        {[
          {
            title: "Winou Stagi",
            img: "/images/event1.png",
            desc: `The "Winou Stagi" event by AIESEC gives young people a unique chance to explore international internships.`,
          },
          {
            title: "ML NIGHT",
            img: "/images/event2.png",
            desc: `This event brings together technology enthusiasts and offers an exceptional opportunity to exchange ideas.`,
          },
          {
            title: "General Assembly",
            img: "/images/event3.png",
            desc: `At the general assembly, leaders warmly welcome new members and outline their roles and responsibilities.`,
          },
        ].map((event, idx) => (
          <div key={idx} className="bg-[#D8DDDE] p-5 rounded-lg text-center w-full sm:w-[45%] md:w-[30%]">
            <Image src={event.img} alt={`${event.title} Image`} width={400} height={300} className="w-full h-auto rounded-md" />
            <h2 className="text-xl text-[#B58E40] mt-3 font-semibold">{event.title}</h2>
            <p className="text-[#00072D] mt-2 text-sm">{event.desc}</p>
            {
              <button className="mt-4 bg-[#780C05] text-white px-5 py-2 rounded-md font-bold hover:bg-[#B58E40]">
                Save my spot
              </button>
            }
          </div>
        ))}
      </div>

      {/* Organizations */}
      <div className="w-[80%] mx-auto space-y-16">
        {[
          {
            title: "Optima Junior entreprise",
            text: `Optima is the Junior Enterprise of the Faculty of Sciences of Tunis, the first institution in Tunisia to train engineers in computer engineering. It provides its clients with its expertise in the field of Information Technology, enabling them to address the new challenges they face today.`,
            img: "/images/optima.png",
            reverse: false,
          },
          {
            title: "AIESEC MANAR",
            text: `AIESEC is the world's largest youth led, leadership development organisation.  Operating in 127 countries and territories AIESEC aims to activate youth leadership by empowering students and graduates to run an international exchange program.  We provide our members with an integrated development experience comprised of leadership opportunities, international internships and participation in a global learning environment.`,
            img: "/images/aiesec.png",
            reverse: true,
          },
          {
            title: "GOOGLE DEV",
            text: `GDGs on Campus provide learning opportunities for aspiring developers from universities and colleges around the world, allowing them to gain hands-on experience, develop essential skills, and build a strong foundation for a tech career.`,
            img: "/images/GDG.png",
            reverse: false,
          },
          {
            title: "Club ASTRO F.S.T",
            text: `A Faculty Astronomy Club is a group within an academic faculty dedicated to exploring and discussing astronomy. It serves as a platform for students, faculty members, and astronomy enthusiasts to engage in stargazing events, lectures, research projects, and discussions on celestial phenomena. The club often organizes workshops, telescope observation nights, and collaborations with professional astronomers to foster a deeper understanding of the universe.`,
            img: "/images/astro.png",
            reverse: true,
          },
        ].map((section, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row ${section.reverse ? "md:flex-row-reverse" : ""} items-center md:gap-24`}>
            <Image src={section.img} alt={`${section.title} Image`} width={500} height={400} className="w-full md:size-1/3 rounded-lg" />
            <div className="w-full md:w-1/2 text-justify px-2">
              <h2 className="text-4xl font-semibold text-[#780C05] mb-3">{section.title}</h2>
              <p className="text-lg">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
