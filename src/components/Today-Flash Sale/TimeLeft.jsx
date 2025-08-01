import { useEffect, useState } from "react";
import Countdown from "react-countdown";

function TimeLeft() {
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    const storedTime = localStorage.getItem("countdownEndTime");

    if (storedTime) {
      setTargetDate(Number(storedTime));
    } else {
      const endTime = Date.now() + 200 * 24 * 60 * 60 * 1000; // 9 days from now
      localStorage.setItem("countdownEndTime", endTime);
      setTargetDate(endTime);
    }
  }, []);

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex items-center gap-2">
        <p className="flex flex-col text-center">
          <span>Days</span>
          <span className="text-xl font-bold">
            {String(days).padStart(2, "0")}
          </span>
        </p>{" "}
        :
        <p className="flex flex-col text-center">
          <span>Hours</span>
          <span className="text-xl font-bold">
            {String(hours).padStart(2, "0")}
          </span>
        </p>
        :
        <p className="flex flex-col text-center">
          <span>Minutes</span>
          <span className="text-xl font-bold">
            {String(minutes).padStart(2, "0")}
          </span>
        </p>
        :
        <p className="flex flex-col text-center">
          <span>Seconds</span>
          <span className="text-xl font-bold">
            {String(seconds).padStart(2, "0")}
          </span>
        </p>
      </div>
    );
  };

  // Wait until targetDate is loaded
  if (!targetDate) return null;

  return <Countdown date={targetDate} renderer={renderer} />;
}

export default TimeLeft;
