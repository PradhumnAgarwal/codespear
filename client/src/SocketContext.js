'use client'

import React, { createContext, useRef, useEffect, useState } from 'react'

import { io } from "socket.io-client";
import Peer from "simple-peer"

const SocketContext = createContext();
// const socket = io('http://localhost:5000/');
// const socket = io('https://webrtc-r6gz.onrender.com/');
const socket = io('https://codespear-1qu9.onrender.com');

function cypher(str) {
    var all_chars = str.split("");
    for(var i = 0; i < all_chars.length; i++) {
        var char = all_chars[i];
        if (char >= 'a' && char <= 'z') {
            var n = char.charCodeAt() - 'a'.charCodeAt();
            n = (n + 1) % 26;
            all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
        } else if (char >= 'A' && char <= 'Z') {
            var n = char.charCodeAt() - 'A'.charCodeAt();
            n = (n + 1) % 26;
            all_chars[i] = String.fromCharCode(n + 'A'.charCodeAt());
        }
    }
    return all_chars.join("");
}

const ContextProvider = ({ children }) => {

    const [stream, setStream] = useState(null)
    const [me, setMe] = useState('')
    const [call, setCall] = useState({})
    const [name, setName] = useState('')
    const [oppCode, setOppCode] = useState('')
    const [callEnded, setCallEnded] = useState(false)
    const [callAccepted, setCallAccepted] = useState(false)

    const myVideo = useRef();
    const userVideo = useRef();
    const myVideoFight = useRef();
    const userVideoFight = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        socket.on('me', (id) => {
            setMe(id);
            // console.log('me');
        })
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                setStream(stream);
                myVideo.current.srcObject = stream;
                myVideoFight.current.srcObject = stream;
            })

        socket.on('calluser', ({ from, name: callerName, signal }) => {
            setCall({ isReceivingCall: true, from, callerName, signal })
        })
        socket.on('codeShare', (code) => {
           


            setOppCode(cypher(code));
            // console.log(code);
        })
    }, [])

    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream })

        peer.on('signal', (data) => {
            socket.emit('answercall', { signal: data, to: call.from })
        })

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        })

        peer.signal(call.signal);

        connectionRef.current = peer;
    }
    const codeShare = (code) => {
        socket.emit('codeShare', {code, to: call.from});
        // console.log(code);
    }
    const callUser = (id) => {
        const peer = new Peer({ initiator: true, trickle: false, stream })

        peer.on('signal', (data) => {
            socket.emit('calluser', { userToCall: id, signalData: data, from: me, name })
        })

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
            userVideoFight.current.srcObject = currentStream;

        });

        socket.on('callaccepted', (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        })

        connectionRef.current = peer;
    }
    const leaveCall = () => {
        setCallEnded(true);
        connectionRef.current.destroy();
        window.location.reload();
    }

    return (
        <SocketContext.Provider value={{ call, callAccepted, myVideo,myVideoFight, userVideo, userVideoFight, stream, name, setName, callEnded, me, callUser, leaveCall, answerCall, codeShare, oppCode }}>
            {children}
        </SocketContext.Provider>
    )
}

export {ContextProvider, SocketContext}