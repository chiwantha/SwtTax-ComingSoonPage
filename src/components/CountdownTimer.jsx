import { useState, useEffect } from "react";
import CountdownSegment from "./CountdownSegment";

const CountdownTimer = () => {
  const targetDate = new Date("2024-11-30T23:59:59");

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    return Math.max(0, Math.floor(difference / 1000));
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const days = Math.floor(timeRemaining / (3600 * 24));
  const hours = Math.floor((timeRemaining % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  const formatTime = (time) => String(time).padStart(2, "0");

  return (
    <div className="justify-center">
      {timeRemaining > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-3xl p-5">
          <CountdownSegment value={formatTime(days)} label="DAY" />
          <div className="mt-[-10px] hidden flex-wrap items-center justify-center md:block">
            <h1 className="text-5xl font-bold text-white">:</h1>
          </div>
          <CountdownSegment value={formatTime(hours)} label="HOUR" />
          <div className="mt-[-10px] hidden flex-wrap items-center justify-center md:block">
            <h1 className="text-5xl font-bold text-white">:</h1>
          </div>
          <CountdownSegment value={formatTime(minutes)} label="MIN" />
          <div className="mt-[-10px] hidden flex-wrap items-center justify-center md:block">
            <h1 className="text-5xl font-bold text-white">:</h1>
          </div>
          <CountdownSegment value={formatTime(seconds)} label="SEC" />
        </div>
      ) : (
        <div className="flex w-screen items-center justify-center gap-4 rounded-3xl p-6 sm:max-w-sm md:max-w-md">
          <h1 className="text-4xl font-bold text-blue-500">UPDATING</h1>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
