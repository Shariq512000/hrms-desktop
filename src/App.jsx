import AsideBar from './component/layout/aside';
import './styles/style.css'
import './styles/style2.css'
import CustomRoutes from './component/routes';
import { useEffect, useState } from 'react';

function App() {
  const [deviceDingerprint , setDeviceFingerprint] = useState("")

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
  return (
    <main className="webPage">
      <AsideBar /> 
      {/* {deviceDingerprint} */}
      <CustomRoutes />
    </main>
  );
}

export default App;
