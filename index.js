const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let window;

const createWindow = () => {
  window = new BrowserWindow({
    height: 1080,
    width: 1920,
    frame: false
  });

  const index = url.format({
    pathname: path.join(__dirname, 'dist',  'index.html'),
    protocol: 'file',
    slashes: true
  });

  console.log(index);

  window.loadURL(index);

  window.on('closed', () => {
    window = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (window === null) createWindow();
});
