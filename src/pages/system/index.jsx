import React, { useEffect, useState } from 'react'

const SystemDetail = () => {

    const [userName , setUserName] = useState("");
    const [systemMac , setSystemMac] = useState("");
    const [appVersion , setAppVersion] = useState("");

    useEffect(() => {
        // const username = window.electronAPI.getUsername();
        // console.log('User:', username);
        // setUserName(username)
      
        // const mac = window.electronAPI.getMacAddress();
        // setSystemMac(mac)
        // console.log("MAC address:", mac);
        const fetchDetails = async () => {
            try {
                const username = await window.electronAPI.getUsername();
                const mac = await window.electronAPI.getMacAddress();
                const softwareVersion = await window.electronAPI.getAppVersion();
                setUserName(username);
                setSystemMac(mac);
                setAppVersion(softwareVersion);
                console.log('User:', username);
                console.log('MAC address:', mac);
            } catch (err) {
                console.error('Error fetching system details:', err);
            }
        };
        fetchDetails();
    }, []);

    return (
        <div>
            <h1>Mac: {systemMac}</h1>
            <h1>User: {userName}</h1>
            <h1>App Version: {appVersion}</h1>
        </div>
    )
}

export default SystemDetail
