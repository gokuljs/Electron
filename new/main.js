// main script file which typically controls the life cycle of the application
const { app, BrowserWindow } = require('electron')
    // first importing the app and browserwindow module of tthe elctron package 
const colors = require("colors")
console.log(colors.rainbow('hello world!'));

// let us see the condition between the app ready evevnt 
console.log("is app ready or not  " + colors.red(app.isReady()))
    //this is to check wheather the app is on ready state or not 
    // 
setTimeout(() => {
        console.log("is app ready or not  " + colors.green(app.isReady()))

    }, 2000) // setting a timeout for 2 seconds and checkhing the state of the app

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

// app.whenReady().then(createWindow) //Returns Promise<void> - fulfilled when Electron is initialized. May be used as a convenient alternative to checking app.isReady() and subscribing to the ready event if the app is not ready yet.
// app.whenReady().then(createWindow)
// below two functions are used to indicate your inside window or test
// app.on('browser-window-blur', () => {
//     console.log("app unfocsued");
//     setTimeout(() => {
//         app.quit() // this is used for quitting the windows rather than closing the window manually from iunside 

//     }, 3000)
// })


// app.on('browser-window-focus', () => {
//     console.log("app focsued");
// })

// if you want some action to take place before quitting then this the method to go for 
// app.on('before-quit', e => {
//     console.log("Preventing all apps from closing");
//     e.preventDefault()
// })

app.on('ready', () => {
    console.log("app is ready")
    console.log("current app path name" + app.getAppPath())
        // getpath is used to certain files present int the system 
    console.log(app.getPath('desktop'))
    console.log(app.getPath('music'))
    cosnole.log("getting current app version" + app.getName())
    console.log(app.getPath('documents'))

    createWindow()

})
console.log("is app ready or not  " + colors.green(app.isReady()))
    // before-quit listener is used to close all the application before it is started 

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