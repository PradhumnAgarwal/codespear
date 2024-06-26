"use client";

import { SocketContext } from "@/SocketContext";
import { useContext } from "react";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around", margin:'10px' }}>
          <h1>{call.callerName || call.from || "Someone"} wants to join the contest!</h1>
          <div
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer"
            onClick={answerCall}
          >
            Accept
          </div>
        </div>
      )}
    </>
  );
};

export default Notifications;
