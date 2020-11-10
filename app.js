const {app, BrowserWindow} = require('electron') // http://electron.atom.io/docs/api
const path = require('path');
const url = require('url');
var fs = require('fs');


let window = null

// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 800px
    width: 800,
    // Set the initial height to 600px
    height: 600,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    webPreferences: {
      // Disable node integration in remote page
      nodeIntegration: false,
    },
    icon: __dirname + '/pilot.ico'
  })

  // URL is argument to npm start
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'drive-ui', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Show window when page is ready
  window.once('ready-to-show', () => {
    window.maximize()
    window.show()
  })
})
