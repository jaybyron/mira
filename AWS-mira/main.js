// require electron
const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function initializeWindow() {
  mainWindow = new BrowserWindow({});
  mainWindow.loadFile(path.join(__dirname, './src/index.html'));
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', initializeWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    initializeWindow();
  }
});