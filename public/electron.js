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







const { app, BrowserWindow, ipcMain, powerMonitor, Tray, Menu } = require('electron');
const path = require('path');
const getDeviceFingerprint = require('./getFingerprint');
const os = require('os');
const { autoUpdater } = require('electron-updater');
// const AutoLaunch = require('electron-auto-launch'); // ✅ Import

let mainWindow;
let tray = null;

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

  mainWindow.loadFile(path.join(__dirname, '../build/index.html')); // For Prod
  // mainWindow.loadURL('http://localhost:3000'); // For Dev
  mainWindow.webContents.on('did-finish-load', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });
  mainWindow.on('close', (event) => {
    event.preventDefault(); // ❗️Block close
    mainWindow.hide();      // ✅ Hide to tray instead
  });
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {

  // const autoLauncher = new AutoLaunch({
  //   name: 'MyElectronApp',
  //   path: process.execPath,
  // });

  // autoLauncher.isEnabled().then((isEnabled) => {
  //   if (!isEnabled) autoLauncher.enable();
  // });

  // createWindow();

  app.setLoginItemSettings({
    openAtLogin: true,
    path: app.getPath('exe'),
    args: ['--hidden'], // optional flag to indicate silent startup
  });

  createWindow();

  // ✅ Check if app started with '--hidden' flag (e.g., from auto-start)
  // const isAutoLaunch = process.argv.includes('--hidden');

  // if (!isAutoLaunch) {
  //   createWindow(); // Normal startup, show window
  // } else {
  //   // Auto-started: do not show window
  //   // background tasks like idle check or tray continue working
  //   console.log('App started silently on boot.');
  // }

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

  ipcMain.handle('get-idle-time', () => {
    return powerMonitor.getSystemIdleTime(); // return idle time in seconds
  });

  tray = new Tray(path.join(__dirname, './calander/avatar1-0.png')); // Use your tray icon
  const trayMenu = Menu.buildFromTemplate([
    { label: 'Show App', click: () => mainWindow.show() },
    // { label: 'Quit', click: () => {
    //   app.quit();
    // }},
  ]);
  tray.setToolTip('Idle Checker App');
  tray.setContextMenu(trayMenu);
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

app.on('before-quit', (e) => {
  e.preventDefault(); // Prevent app from quitting via keyboard
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});