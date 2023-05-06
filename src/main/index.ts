import { BrowserWindow, app } from 'electron';

(async () => {
  await app.whenReady();

  console.log(__dirname + '/..' + '/src/preload/index.js');

  const window = new BrowserWindow({
    width: 1100,
    height: 700,
    minWidth: 1100,
    minHeight: 700,
    center: true,
    webPreferences: {
      contextIsolation: false,
      preload: __dirname + '/..' + '/src/preload/index.js',
    },
  });

  window.webContents.openDevTools();

  await window.loadURL('http://localhost:3000');
})();
