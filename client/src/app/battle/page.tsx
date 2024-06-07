"use client";
import { SocketContext } from "@/SocketContext";
import CallScreen from "@/components/CallScreen";
import ContestScreen from "@/components/ContestScreen";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { name, myVideo, userVideo, call } = useContext(SocketContext);


  const { callAccepted } = useContext(SocketContext);
  const [isContest, setIsContest] = useState(false);
  useEffect(() => {
    // console.log(callAccepted);
    setTimeout(() => {
      if (callAccepted) setIsContest(true);
    }, 5000);
  }, [callAccepted]);
  return (
    <>
      <div className="justify-center h-[100vh]" style={{ display: isContest ? 'none' : 'block'  }}>
        <CallScreen />
      </div>
      <div className="justify-center h-[100vh]" style={{ display: isContest ? 'block' : 'none' }}>
        <ContestScreen />
      </div>
    </>
  );
}
