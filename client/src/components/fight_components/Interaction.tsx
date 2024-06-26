"use client";
import React, { useContext } from "react";
import VideoPlayer from "../VideoPlayer";
import { SocketContext } from "@/SocketContext";
import { Editor } from "@monaco-editor/react";
import { useClerk } from "@clerk/clerk-react";

function Interaction() {
  // opponent language, submission status

  const {
    name,
    call,
    userVideoFight,
    myVideoFight,
    leaveCall,
    oppCode,
    oppResults,
  } = useContext(SocketContext);

  const { loaded } = useClerk();
  const language = "cpp";

  return (
    <div className="bg-dark-layer-2  h-[100vh] overflow-y-auto border-l-4 border-slate-950 flex flex-col space-y-2">
      <div className="h-10">Timer</div>
      <div className="h-[35%] min-h-36 relative mx-1 border-gray-950 border-2">
        {loaded ? (
          <div className="overlay">
            {/* <div style={{pointerEvents:'none', opacity:0}}> */}
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
                domReadOnly: true,
                readOnly: true,
              }}
              theme="vs-dark"
              language={language}
              value={oppCode || ""}
            />
            {/* </div> */}
          </div>
        ) : (
          <div className="h-full flex justify-center items-center">
            Loading Editor...
          </div>
        )}
      </div>
      <div className="mx-2 relative">
        <div className="absolute w-full flex justify-center top-12 z-10">
          <img src="logo_01.png" className="h-8" />
        </div>
        <div className="text-center p-1 bg-[rgb(26,26,26)] text-gray-400 rounded-t-xl">
          Submission Results
        </div>
        <div className="h-16 flex relative bg-[rgb(31,31,31)]">
          <div className=" flex-1 text-4xl flex items-center justify-center">
            3
          </div>
          <div className=" flex-1 text-4xl flex items-center justify-center">
            <p>{oppResults ? oppResults.length : 0}</p>
          </div>
        </div>
        <div className="text-center p-1 bg-[rgb(26,26,26)] text-gray-400 text-sm rounded-b-xl">
          testcases passed
        </div>
      </div>
      <div className="flex mx-2 space-x-1">
        <div className=" w-[50%]">
          <video
            style={{ width: "100%" }}
            muted
            ref={myVideoFight || null}
            autoPlay
          />
          <div className="w-full text-center text-xs bg-gray-950 text-gray-300">
            {name || "You"}
          </div>
        </div>
        <div className=" w-[50%]">
          <video
            style={{ width: "100%" }}
            ref={userVideoFight || null}
            autoPlay
          />
          <div className="w-full text-center text-xs bg-gray-950 text-gray-300">
            {call.callerName || "Opponent"}
          </div>
        </div>
      </div>

      <div
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 rounded text-center cursor-pointer mx-6"
        onClick={leaveCall}
      >
        Leave
      </div>
    </div>
  );
}

export default Interaction;
