import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Welcome() {

    const navigate = useNavigate();
    const [roomName, setRoomName] = useState();
    const [authToken, setAuthToken] = useState();

    const roomNameHandler = (e) => {
        setRoomName(e.target.value);
    }
    const authTokenHandler = (e) => {
        setAuthToken(e.target.value);
    }

    const joinMeetingHandler = (e) => {
        navigate('/meeting', { state: { roomName: roomName, authToken: authToken } });
    }

    return <>
        <h1>: Welcome :</h1>
        <div>
            <img src='./Dyte.png' alt='dyte logo' />
            <br />
            <input placeholder='Room Name' onChange={roomNameHandler} />
            <input placeholder='Auth Token' onChange={authTokenHandler} />
            <button onClick={joinMeetingHandler}>Join Meeting</button>
        </div>
    </>
}