"use client";
import React, { useContext } from "react";
import VideoPlayer from "../VideoPlayer";
import { SocketContext } from "@/SocketContext";

function Interaction() {
  const { name, call, userVideoFight, myVideoFight, leaveCall } =
    useContext(SocketContext);

  return (
    <div className=" bg-slate-600 h-full">
      <div className="flex">
        <div className=" w-[50%]">
          <video
            style={{ width: "100%" }}
            muted
            ref={myVideoFight || null}
            autoPlay
          />
          <div className=" w-full text-center">{name || "You"}</div>
        </div>
        <div className=" w-[50%]">
          <video
            style={{ width: "100%" }}
            muted
            ref={userVideoFight || null}
            autoPlay
          />
          <div className=" w-full text-center">
            {call.callerName || "Opponent"}
          </div>
        </div>
      </div>
      
      <div
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer m-4"
        onClick={leaveCall}
      >
        Leave
      </div>
    </div>
  );
}

export default Interaction;
