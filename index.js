const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let window;

const createWindow = () => {
  window = new BrowserWindow({
    height: 1080,
    width: 1920
  });

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'dist', 'index.html'),
    protocol: 'file',
    slashes: true
  }));

  window.on('closed', () => {
    window = null;
  });

  if (process.env.MODE.trim() === 'dev') {
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
