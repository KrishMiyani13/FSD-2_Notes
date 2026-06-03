import { useState, useEffect } from "react";

function CountdownTimer() {
  // Set initial countdown time in seconds (e.g., 5 minutes = 300 seconds)
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (timeLeft <= 0) return; // stop when timer hits zero

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [timeLeft]);

  // Convert seconds into mm:ss format
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h2>Reverse Timer</h2>
      <p>
        {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}
      </p>
      {timeLeft === 0 && <p>⏰ Time's up!</p>}
    </div>
  );
}

export default CountdownTimer;
