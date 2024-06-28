"use client";
import { SocketContext } from "@/SocketContext";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Options from "./Options";
import Notifications from "./Notifications";
import toast from "react-hot-toast";

function CallScreen() {
  const { name, call, userVideo, myVideo, me } = useContext(SocketContext);

  return (
    <>
      {/* <div className="text-3xl w-full text-center">Battle Page</div> */}
      <div className="flex">
        <div className=" h-full w-[40%]">
          <div>
            <div>
              <video
                playsInline
                muted
                ref={myVideo || null}
                autoPlay
                style={{ width: "100%" }}
              />
            </div>
            <div
              className="text-3xl text-white text-center"
              style={{ width: "100%" }}
            >
              {/* {name || "You"} */}
            </div>{" "}
            <br />
          </div>
        </div>
        <div className=" h-full w-[20%] my-auto">
          <Image
            width={100}
            height={100}
            alt="Logo"
            src="/logo_01.png"
            style={{ width: "80%", marginInline: "auto" }}
          />
        </div>
        <div className=" h-full w-[40%] ">
          <div>
            <div>
              <video
                playsInline
                ref={userVideo || null}
                autoPlay
                style={{ width: "100%" }}
              />
            </div>
            <div
              className="text-3xl text-white text-center"
              style={{ width: "100%" }}
            >
              {/* {call.callerName || "Opponent"} */}
            </div>
          </div>
        </div>
      </div>
      <Options>
        <Notifications />
      </Options>
    </>
  );
}

export default CallScreen;
