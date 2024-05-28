"use client";
import { SocketContext } from "@/SocketContext";
import Notifications from "@/components/Notifications";
import Options from "@/components/Options";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className="justify-center h-[100vh] ">
      <div className="text-3xl w-full text-center">Battle Page</div>
      <div className="flex">
        <div className=" h-full w-[40%]">
          <div>
            <div>
              <video playsInline muted ref={myVideo || null} autoPlay />
            </div>
            <div
              className="text-3xl text-white text-center"
              style={{ width: "100%" }}
            >
              {name || "You"}
            </div>{" "}
            <br />
          </div>
        </div>
        <div className=" h-full w-[20%] my-auto">
          <Image width={100} height={100} alt="Logo" src="/logo_01.png" style={{width:'80%', marginInline:'auto'}} />
        </div>
        <div className=" h-full w-[40%] ">
          <div>
            {/* Video player designing div */}
            <div>
              {/* <VideoPlayer /> */}
              <video
                playsInline
                muted
                ref={userVideo || null}
                autoPlay
                style={{ width: "100%" }}
              />
            </div>
            <div
              className="text-3xl text-white text-center"
              style={{ width: "100%" }}
            >
              {call.callerName}
            </div>
          </div>
        </div>
      </div>
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}
