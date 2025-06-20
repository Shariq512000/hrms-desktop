import AsideBar from './component/layout/aside';
import './styles/style.css'
import './styles/style2.css'
import CustomRoutes from './component/routes';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {
  const [deviceDingerprint , setDeviceFingerprint] = useState("");
  const [isBreak, setIsBreak] = useState(false);
  const isBreakRef = useRef(isBreak);

  useEffect(() => {
    window.electronAPI.onUpdateAvailable(() => {
      alert('Update Available! Downloading...');
    });
  
    window.electronAPI.onUpdateDownloaded(() => {
      const confirmed = window.confirm('Update downloaded. Restart now?');
      if (confirmed) {
        window.electronAPI.quitAndInstall();
      }
    });
  }, []);

  useEffect(() => {
    window.electronAPI.getFingerprint().then((fingerprint) => {
      console.log("Device Fingerprint:", fingerprint);
      setDeviceFingerprint(fingerprint)
      // You can store it in state or context too
    });
  }, []);

  useEffect(() => {
    isBreakRef.current = isBreak; // Always keep the ref in sync
  }, [isBreak]);

  useEffect(() => {
    const checkIdle = async () => {
      const username = await window.electronAPI.getUsername();
      const idleTime = await window.electronAPI.getIdleTime();
      console.log('Idle Time:', idleTime, "username", username);

      if (idleTime >= 120) { // 2 minutes
        if(!isBreakRef.current){
          try {
            let apiCall = await axios.post('https://break-apis.vercel.app/mark-break', {"user_name": username});
            console.log("Api Call Mark Break" , apiCall.data)
            // let apiCall = await axios.
            setIsBreak(true);
          } catch (error) {
            console.log("Error" , error)
          }
        }
      }else{
        if(isBreakRef.current){
          // let apiCall = await axios.
          try {
            let apiCall = await axios.post('https://break-apis.vercel.app/remove-break', {"user_name": username});
            console.log("Api Call Remove Break" , apiCall.data)
            setIsBreak(false);
          } catch (error) {
            console.log("ERROR" , error)
          }
        }
      }
    };

    const interval = setInterval(checkIdle, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="webPage">
      <AsideBar /> 
      {/* {deviceDingerprint} */}
      <CustomRoutes />
    </main>
  );
}

export default App;
