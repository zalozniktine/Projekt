const { app, BrowserWindow, ipcMain } = require('electron')

require('electron-debug')({
    showDevTools: process.env.NODE_ENV === 'development'
})

function createWindow() {
    var win = new BrowserWindow({
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

ipcMain.on('request-app-close', event=> {
    app.quit();
});

app.on('ready', createWindow)