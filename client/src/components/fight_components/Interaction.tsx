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
    <div className=" bg-gray-800  h-[100vh] overflow-y-auto border-l-4 border-slate-950 flex flex-col space-y-2">
      <div className="h-10">Timer</div>
      <div className="h-[35%] min-h-36 relative">
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
      <div className="h-[25%] min-h-25 bg-[rgb(50,50,50)]">
        Public Log
        <p>{oppResults && oppResults.length}</p>
      </div>
      <div className="flex h-">
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
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded text-center cursor-pointer m-4"
        onClick={leaveCall}
      >
        Leave
      </div>
    </div>
  );
}

export default Interaction;
