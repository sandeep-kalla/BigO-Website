import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetTime = new Date();

      // Set target time to 5:30 AM IST for the next day
      targetTime.setUTCHours(0); // 5:30 AM IST is 00:00 UTC
      targetTime.setUTCMinutes(0);
      targetTime.setUTCSeconds(0);
      targetTime.setUTCMilliseconds(0);

      // If current time is past 5:30 AM IST, set target to next day
      if (now >= targetTime) {
        targetTime.setUTCDate(targetTime.getUTCDate() + 1);
      }

      const difference = targetTime - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-timer bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-purple-500/20">
      <h3 className="text-white text-lg font-semibold mb-2">Next Challenge In</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <div className="bg-purple-600/40 rounded-lg w-16 h-16 flex items-center justify-center mb-1">
            <span className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
          </div>
          <span className="text-purple-300 text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-purple-600/40 rounded-lg w-16 h-16 flex items-center justify-center mb-1">
            <span className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
          </div>
          <span className="text-purple-300 text-sm">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-purple-600/40 rounded-lg w-16 h-16 flex items-center justify-center mb-1">
            <span className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
          <span className="text-purple-300 text-sm">Seconds</span>
        </div>
      </div>
      <p className="text-purple-300 text-sm mt-4 text-center">
        Daily challenge refreshes at<br />
        5:30 AM IST
      </p>
    </div>
  );
};

export default CountdownTimer;