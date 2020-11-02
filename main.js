/*
 * @Author: bobocde
 * @Description: 
 */
/*
 * @Author: bobocde
 * @Description: 
 */
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const ipcMain = require('electron').ipcMain;
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            //webSecurity: false
        }
    });
    if (isDev) {
        win.loadURL('http://localhost:3000')
    } else {
        win.loadFile('index.html');
    }
    console.log('打开调式');
    win.webContents.openDevTools();
    ipcMain.on('message', (event, arg) => {
        console.log(event);
        console.log(arg);
        event.reply('result', 'hello')
    })
    // const winChild = new BrowserWindow({
    //     width: 300,
    //     height: 300,
    //     webPreferences: {
    //         nodeIntegration: true
    //     },
    //     parent: win,
    // });
    // winChild.loadFile('second.html');

}

app.on('ready', () => {
    createWindow();
})
app.on('activate', () => {
    console.log('激活');
    if (BrowserWindow.getAllWindow().length === 0) {
        createWindow();
    }
});
app.on('window-all-closed', () => {
    console.log('销毁');
    if (process.platform === 'darwin') {
        app.quit();
    }
});
