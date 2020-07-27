var fs = require('fs');
var writeStream = fs.createWriteStream('./log/abc.txt');

module.exports = {
    /* PUSH */
    write: function(message, cb) {
        writeStream.write(message + ',', cb);
    },
    read: function() {
        return fs.readFileSync(process.cwd() + '/log/abc.txt').toString();
    },
    clear: function() {
        writeStream.end();
        fs.unlink('log/abc.txt', function(err) {
            if (err) throw err;
            // if no error, file has been deleted successfully
            writeStream = fs.createWriteStream('./log/abc.txt');
            console.log('File deleted!');
        });
    }
}