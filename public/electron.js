const path = require('path')
const fs = require('fs')
const url = require("url")

const {app, BrowserWindow, ipcMain, Menu} = require('electron')
const isDev = require('electron-is-dev')

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Qube',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  console.log("DIRNAME", __dirname)
  win.loadURL(
    isDev
    ? 'http://localhost:3000'
    : url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
      })
  )

}

ipcMain.on('toMain', (event, args) => {
  fs.readFile(path.join(__dirname, 'words.txt'), 'utf8', (err, data) => {
    if (err) {
      console.log(`[ERROR] ${JSON.stringify(err)}`)
    } else {
      const words = data.split('\n')
      win.webContents.send('fromMain', words)
    }
  })
})

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
