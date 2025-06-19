const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getUsername: () => ipcRenderer.invoke('get-username'),
  getMacAddress: () => ipcRenderer.invoke('get-mac'),
  getFingerprint: () => ipcRenderer.invoke('get-fingerprint'),
  onUpdateAvailable: (cb) => ipcRenderer.on('update_available', cb),
  onUpdateDownloaded: (cb) => ipcRenderer.on('update_downloaded', cb),
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  quitAndInstall: () => ipcRenderer.invoke('quit-and-install')
});
