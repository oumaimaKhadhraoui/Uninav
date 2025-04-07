"use client";
// In app/layout.tsx (Next.js 13+ App Router)
import "../app/globals.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  return (
    <div className="h-full w-full p-4 sm:p-6 md:p-8 overflow-hidden items-center justify-content-center ">
      <div className="h-full w-[100%] sm:w-[90%] md:w-[800px] lg:max-w-[1500px] mx-auto">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          height="100%"
          contentHeight="auto"
          aspectRatio={1.5}
          expandRows={true}
          handleWindowResize={true}
          windowResizeDelay={100}
          stickyHeaderDates={true}
          stickyFooterScrollbar={true}
          events={[
            { title: "Dublin Conference", start: "2025-04-03", end: "2025-02-05",  },
            { title: "Woodstock Festival", start: "2025-04-10", end: "2025-02-12",  },
            { title: "Strawberry Festival", date: "2025-04-19",  },
            { title: "Oktoberfest", start: "2025-04-26", end: "2025-04-28", },
          ]}
        />
      </div>
    </div>
  );
};

export default Calendar;