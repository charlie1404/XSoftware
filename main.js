var electron             = require('electron');
var path                 = require('path');
var url                  = require('url');

var app                  = electron.app;
var BrowserWindow        = electron.BrowserWindow;
var mainWindow;

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        'resizable': false,
        'name': "Software",
        'width': 1360,
        'height': 730,
        'toolbar': true,
        'frame': true
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

global.__base = process.env.PWD + '/';
require('./app/ipc/main'); 



//var mainMenu = [
//    {
//        "label":"File",
//        "submenu": [
//            {
//                "role":"close"
//            }
//        ]
//    },
//    {
//        "label":"Edit",
//        "submenu": [
//            {
//                "role": "undo"
//            },
//            {
//                "role": "redo"
//            },
//            {
//                "type": "separator"
//            },
//            {
//                "role": "cut"
//            },
//            {
//                "role": "copy"
//            },
//            {
//                "role": "paste"
//            },
//            {
//                "type": "separator"
//            },
//            {
//                "role": "delete"
//            },
//            {
//                "role": "selectall"
//            }
//        ]
//    },
//    {
//        "label":"View",
//        "submenu": [
//            {
//                "role": "reload"
//            },
//            {
//                "role": "forcereload"
//            },
//            {
//                "role": "toggledevtools"
//            },
//            {
//                "type": "separator"
//            },
//            {
//                "role": "resetzoom"
//            },
//            {
//                "role": "zoomin"
//            },
//            {
//                "role": "zoomout"
//            },
//            {
//                "type": "separator"
//            },
//            {
//                "role": "togglefullscreen"
//            }
//        ]
//    },
//    {
//        "role":"help",
//        "submenu": [
//            {
//                "label":"About"
//            },
//            {
//                "label":"Credits"
//            }
//        ]
//    }
//];