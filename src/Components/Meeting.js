import React from 'react'
import { useLocation, } from 'react-router-dom'
import { useEffect } from 'react';
import { useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';

export default function Meeting() {

    const location = useLocation();
    const [client, initClient] = useDyteClient();

    useEffect(() => {
        initClient({
            authToken: location.state.authToken,
            roomName: location.state.roomName,
        });
    }, [])

    return <DyteMeeting meeting={client} />
}