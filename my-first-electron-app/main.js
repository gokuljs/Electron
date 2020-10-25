// main script file which typically controls the life cycle of the application
const { app, BrowserWindow } = require('electron')
    // first importing the app and browserwindow module of tthe elctron package 
    // const colors = require("colors")
console.log(colors.rainbow('hello world!'));

function createWindow() {
    console.log("creating window");
    console.log("getting started with electron js")
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        //         width Integer (optional) - Window's width in pixels. Default is 800.
        // height Integer (optional) - Window's height in pixels. Default is 600.
        // nodeIntegration Boolean (optional) - Whether node integration is enabled. Default is false.

        webPreferences: {
            nodeintegeration: true

        } // simple telling that adding nodejs to the electron project 

    })
    win.loadFile('index.html') // is used to load  index.html files 
    win.webContents.openDevTools() // this line basically opens chrome devtools on which it is basically called on 
}

app.whenReady().then(createWindow) //Returns Promise<void> - fulfilled when Electron is initialized. May be used as a convenient alternative to checking app.isReady() and subscribing to the ready event if the app is not ready yet.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
// Line 24: You add a new listener that creates a new browser window only if when the application has no visible windows after being activated. For example, after launching the application for the first time, or re-launching the already running applicatio
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});