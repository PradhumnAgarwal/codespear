import { useState, useEffect } from "react";

const Timer = () => {
  const [currentState, setCurrentState] = useState("");
  const [time, setTime] = useState(0);

  const onStart = () => {
    if (currentState === "START") return;
    setCurrentState("START");
    setInterval(() => {
      setTime((prev) => prev + 500);
    }, 1000);
  };

  const onStop = () => {
    if (currentState === "STOP") return;
    setCurrentState("STOP");
  };

  const onReset = () => {
    if (currentState === "STOP") return;
    setCurrentState("RESET");
    setTime(0);
  };

  useEffect(() => {
    console.log("Timer started");
    onStart();
  }, []);

  const sec = Math.floor(time / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const millis = (time % 1000).toString().padStart(3, "0");
  const seconds = (sec % 60).toString().padStart(2, "0");
  const minutes = (min % 60).toString().padStart(2, "0");
  const hours = (hour % 24).toString().padStart(2, "0");

  return (
    <div className="timer">
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
};

export default Timer;
