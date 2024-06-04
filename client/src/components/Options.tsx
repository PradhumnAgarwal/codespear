"use client";

import { SocketContext } from "@/SocketContext";
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";


const Options = ({ children }: { children: React.ReactNode }) => {
  const { me, name, setName, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  const router = useRouter()

  return (
    <div className="mt-4">
      <div className=" flex justify-between">
        <div style={{width:'40%'}}>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
            />
          </div>
          <CopyToClipboard text={me}>
            <div onClick={() =>{toast.success('ID copied!')}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer">
              Copy Your ID
            </div>
          </CopyToClipboard>
        </div>
        <div style={{width:'40%'}}>
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
            onClick={() => {
              callUser(idToCall)
              toast.success('Call Initiated')
            }}
          >
            Call
          </div>
        </div>
        {/* Do the logic for redirect accordingly */}
        {/* <div
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer"
            onClick={() => {
              router.push('/fight')
              toast.success('Clicked')
            }}
          >
            Click me
          </div> */}
      </div>

      {children}
    </div>
  );
};

export default Options;
