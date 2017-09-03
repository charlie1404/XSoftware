var electron     = require('electron');
var mysql        = require('mysql');

var ipcMain      = electron.ipcMain;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'electron_app'
});

con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});

ipcMain.on('searchReportNo', function (event, arg) {
    console.log(arg);
    var sql = 'SELECT * FROM reports WHERE report_no = ?';
    con.query(sql, [arg], function (err, rows) {
        if (err)
            throw err;
        event.returnValue = rows;
    });
});
