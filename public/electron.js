// const { app, BrowserWindow } = require('electron');
// const path = require('path');

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1024,
//     height: 768,
//     autoHideMenuBar: true, // ✅ Hides the menu bar
//     webPreferences: {
//       contextIsolation: true,
//     }
//   });

//   win.loadFile(path.join(__dirname, '../build/index.html'));
// }

// app.whenReady().then(() => {
//   createWindow();
//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit();
// });












// const { app, BrowserWindow, Menu } = require('electron');
// const path = require('path');

// function createWindow() {
//   const win = new BrowserWindow({
//     show: false,
//     autoHideMenuBar: true,
//     webPreferences: {
//       contextIsolation: true,
//     }
//   });

//   Menu.setApplicationMenu(null);

//   win.loadFile(path.join(__dirname, '../build/index.html'));

//   win.once('ready-to-show', () => {
//     win.maximize();
//     win.show();
//   });
// }

// app.whenReady().then(() => {
//   const fingerprint = getDeviceFingerprint();
//   console.log('Device Fingerprint:', fingerprint);
//   createWindow();
//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit();
// });







const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const getDeviceFingerprint = require('./getFingerprint');
const os = require('os');
const { autoUpdater } = require('electron-updater');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    // fullscreen: true, // opens in full window
    autoHideMenuBar: true, // hides top bar
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // add preload
      contextIsolation: true,
      nodeIntegration: false,
    }
  });

  mainWindow.loadFile(path.join(__dirname, '../build/index.html'));
  mainWindow.webContents.on('did-finish-load', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('get-fingerprint', async () => {
    return getDeviceFingerprint();
  });

  ipcMain.handle('get-username', () => {
    return os.userInfo().username;
  });

  ipcMain.handle('get-mac', () => {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const net of interfaces[name]) {
        if (!net.internal && net.family === 'IPv4' && net.mac !== '00:00:00:00:00:00') {
          return net.mac;
        }
      }
    }
    return null;
  });
  
  ipcMain.handle('get-app-version', async () => {
    return app.getVersion();
  });

  ipcMain.handle('quit-and-install', () => {
    autoUpdater.quitAndInstall();
  });
});

autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update_downloaded');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});