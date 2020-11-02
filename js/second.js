/*
 * @Author: bobocde
 * @Description: 
 */
/*
 * @Author: bobocde
 * @Description: 
 */
const ipcRenderer = require('electron').ipcRenderer;
const { BrowserWindow } = require('electron').remote;

window.addEventListener('DOMContentLoaded', () => {
    //document.getElementById('content').innerHTML = process.versions.node;
    let win = new BrowserWindow({ width: 300, height: 300 });
    win.loadURL('https://www.baidu.com');
    document.getElementById('btn').addEventListener('click', () => {

        ipcRenderer.send('message', '信息');
        ipcRenderer.on('result', (event, result) => {
            console.log(result);

        });

    })
})