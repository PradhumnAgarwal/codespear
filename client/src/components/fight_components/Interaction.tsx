"use client";
import React, { useContext } from 'react'
import VideoPlayer from '../VideoPlayer';
import { SocketContext } from '@/SocketContext';

function Interaction() {
  const { name, call, userVideoFight, myVideoFight} = useContext(SocketContext);

  return (
    <div className=' bg-slate-600 h-full flex'>
        <div className=' w-[50%]'>
            <video style={{width:'100%'}} muted ref={myVideoFight ||  null} autoPlay/>
            <div className=' w-full text-center'>{name}</div>
            
        </div>
        <div className=' w-[50%]'>
            <video style={{width:'100%'}} muted ref={userVideoFight || null} autoPlay/>
            <div className=' w-full text-center'>{call.callerName}</div>
            
        </div>
    </div>
  )
}

export default Interaction
