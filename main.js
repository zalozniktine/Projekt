const { app, BrowserWindow, ipcMain } = require('electron')

require('electron-debug')({
    showDevTools: process.env.NODE_ENV === 'development'
})
var win;

function createWindow() {
    win = new BrowserWindow({
        width: 500,
        height: 500, 
        icon: './images.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('./Projekt.html')
}

function openHome() {
    win = new BrowserWindow({
        fullscreen: true,
        icon: './images.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('./Test.html')
}

function openView() {
    win = new BrowserWindow({
        fullscreen: true,
        icon: './images.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('./posamezna-knjiga.html')
}

ipcMain.on('request-app-close', event=> {
    app.quit();
});

ipcMain.on('book-view', event => {
    openView()
})

ipcMain.on('login', event => {
    openHome();
})

app.on('ready', createWindow)