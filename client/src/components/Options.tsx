"use client";

import { SocketContext } from "@/SocketContext";
// import { useRouter } from 'next/navigation';
import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

const Options = ({ children }: { children: React.ReactNode }) => {
  const { me, name, setName, callUser, callAccepted } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  const handleCopy = (e: any) => {
    e.preventDefault();
    if(!me){
      toast.error("Still trying to connect to server");
      return;
    }
    toast.success("ID copied!");
  };
  const handleJoinRequest = (e: any) => {
    e.preventDefault();
    if(name.length == 0){
      toast.error("Please enter your name first");
      return;
    }
    if(idToCall.length == 0){
      toast.error("Please enter Contest ID");
      return;
    }
    if(idToCall.length != 20){
      toast.error("Invalid Contest ID");
      return;
    }
    callUser(idToCall);
    console.log(idToCall.length)
    toast.success("Request Sent");
  };

  return (
    <div className="mt-4">
      <div className=" flex justify-center w-full">
        <div style={{ width: "60%" }}>
          <div className=" mb-16">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <CopyToClipboard text={me}>
            <div
              style={{ cursor: me ? "pointer" : "not-allowed" }}
              onClick={handleCopy}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer"
            >
              Copy Contest Id
            </div>
          </CopyToClipboard>

          <div className=" w-full flex justify-center my-2">
            <span>- OR -</span>
          </div>

          <div className=" flex w-full justify-between">
            <div style={{ width: "60%" }}>
              <input
                type="text"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Contest ID"
              />
            </div>

            <div
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer"
              style={{
                width: "38%",
                cursor: callAccepted ? "not-allowed" : "pointer",
              }}
              onClick={handleJoinRequest}
            >
              Request to Join
            </div>
          </div>
        </div>
        {/* <div style={{width:'40%'}}>
          <div>
            <input
              type="text"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Room ID"
            />
          </div>
          <div
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer"
            style={{ cursor: callAccepted? 'not-allowed' : 'pointer'}}
            onClick={() => {
              callUser(idToCall)
              toast.success('Call Initiated')
            }}
          >
            Call
          </div>
        </div> */}
      </div>

      {children}
    </div>
  );
};

export default Options;
