/*
 * @Author: bobocde
 * @Description: 
 */
const { app, BrowserWindow } = require('electron');
function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        }
    });
    console.log('开始加载页面');
    win.loadFile('index.html');
    console.log('打开调式');
    win.webContents.openDevTools();

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
