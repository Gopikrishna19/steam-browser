const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, '.steam-browser-rc')));

let window;

const createWindow = () => {
  window = new BrowserWindow({
    frame: false,
    height: 1080,
    icon: path.join(__dirname, ...config.location, 'favicon.ico'),
    minHeight: 600,
    minWidth: 1050,
    width: 1920
  });

  window.loadURL(url.format({
    pathname: path.join(__dirname, ...config.location, 'index.html'),
    protocol: 'file',
    slashes: true
  }));

  window.on('closed', () => {
    window = null;
  });

  if (process.env.MODE && process.env.MODE.trim() === 'dev') {
    const watch = require('node-watch');
    watch(path.join(__dirname, 'dist'), {recursive: true}, () => {
      window.reload();
    });
  }
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (window === null) createWindow();
});
