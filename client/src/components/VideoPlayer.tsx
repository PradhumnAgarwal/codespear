"use client";

import { SocketContext } from "@/SocketContext";
import { useContext } from "react";

const VideoPlayer = () => {
  const { name, myVideo, userVideo, call} = useContext(SocketContext);

  return (
    <div>
      Video Player
      <video
        playsInline
        muted
        ref={myVideo || null}
        autoPlay
        style={{ width: "100%" }}
      />{" "}
    </div>
  );
};

export default VideoPlayer;
