import React from "react";

interface ScheduleCardProps {
  dates: Array<string>;
  events: Array<string>;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  dates,
  events,
}) => {
  return (
    <div className="w-full sm:w-auto md:w-1/2 lg:w-1/3  bg-white/80 p-10">
      <div>
        <h1 className="text-4xl font-bold text-[#3c4b6a]">Schedule</h1>

        <table className="">
          <tbody className="text-sm divide-y divide-gray-100">
            <tr>
              <td className="p-2 whitespace-nowrap">
                {dates.map((date, index) => (
                  <p
                    key={index}
                    className="text-md font-thin tracking-wide leading-6"
                  >
                    {date}
                  </p>
                ))}
              </td>
              <td className="p-2 whitespace-nowrap">
                {events.map((event, index) => (
                  <p
                    key={index}
                    className="text-md font-thin tracking-wide leading-6"
                  >
                    {event}
                  </p>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
