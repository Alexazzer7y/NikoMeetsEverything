//=============================================================================
//  ozu_File.js v1.2
//=============================================================================

/*:
 * @author ozubon
 * @plugindesc For checking, writing and removing files! And more! Gnarly!
 * @help
 * ===========================================================================
 * Introduction
 * ===========================================================================
 * This plugin simplifies handling some node.js functions.
 * This plugin will not work on mobile, sorry :-(
 *
 * ===========================================================================
 * file.exist
 * ===========================================================================
 * Checks if a file in your game folder exists or not.
 * Intended for the conditional branch script box.
 *
 * file.exist("path", "file.type")
 *
 * "" for path means the main game folder, "" for file checks if folder exists.
 *
 * Some examples:
 * file.exist("", "index.html")
 * file.exist("data", "")
 * file.exist("img/system", "Window.png")
 * ^ All returns TRUE
 * file.exist("asdf/gh", "jkl.txt")
 * ^ Returns FALSE unless it exists.
 * 
 * ===========================================================================
 * file.write
 * ===========================================================================
 * Writes a new file with the desired data.
 * Intended for script calls.
 *
 * file.write("path", "file.type", "stuff")
 *
 * "" for path means the main game folder, the rest is required.
 *
 * Some examples:
 * file.write("", "tanoshindekudasai.txt", "Arigato gozaimasu")
 * file.write("data", "test.json", "Can it write to JSON?")
 *
 * ===========================================================================
 * file.append
 * ===========================================================================
 * Same as file.write but writes to the end of an existing file instead 
 * of overwriting it.
 * Intended for script calls.
 *
 * file.append("path", "file.type", "new stuff")
 *
 * "" for path means the main game folder, the rest is required.
 *
 * Some examples:
 * file.append("", "tanoshindekudasai.txt", "!!!")
 * file.append("data", "test.json", " Yes.")
 *
 * ===========================================================================
 * file.read
 * ===========================================================================
 * Reads a file and outputs a string of what's in it.
 * Intended for conditional branches and setting variables.
 *
 * file.read("path", "file.type")
 *
 * "" for path means the main game folder, the rest is required.
 *
 * Some examples:
 * file.read("", "tanoshindekudasai.txt") === "Arigato gozaimasu!!!"
 * ^ In a conditional branch will return TRUE (if it's true, needless to say).
 * Set a variable to file.read("", "tanoshindekudasai.txt") using
 * Control Variables and the variable will be set to "Arigato gozaimasu!!!"
 *
 * ===========================================================================
 * file.rename
 * ===========================================================================
 * Renames a file, careful not to rename important files.
 * Intended for script calls.
 *
 * file.rename("path", "file.type" "new name.type")
 *
 * "" for path means the main game folder, the rest is required.
 *
 * Some examples:
 * file.rename("", "tanoshindekudasai.txt", "ieie.txt")
 * file.rename("data", "test.json", "johnromero.json")
 *
 * ===========================================================================
 * file.erase
 * ===========================================================================
 * Do not use this one unless you know what you're doing!
 * Permanently deletes a file, be VERY careful not to erase important files.
 * Intended for script calls.
 *
 * file.erase("path", "file.type")
 *
 * "" for path means the main game folder, the rest is required.
 * 
 * Some examples:
 * file.erase("", "ieie.txt")
 * file.erase("data", "johnromero.json")
 *
 */
 
(function() {
    function setup() {

        function file() {}
        file.fs = require("fs");

        file.exist = function(filePath, filename) {
            filePath = this.createPath(filePath);
            if (this.fs.existsSync(filePath + filename)) {
                return !0
            } else {
                return !1
            };
        };
		
		oldVersion = window.location.pathname != "/index.html"

        file.write = function(filePath, filename, data) {
            filePath = this.createPath(filePath);
            this.fs.writeFileSync(filePath + filename, data);
        };
		
        file.append = function(filePath, filename, data) {
            if (file.exist(filePath, filename)) {
                filePath = this.createPath(filePath);
                return this.fs.appendFile(filePath + filename, data);
            } else {
                console.log("File does not exist! Tried to append " + filePath + "/" + filename + "/");
            };
        };

        file.read = function(filePath, filename) {
            if (file.exist(filePath, filename)) {
                filePath = this.createPath(filePath);
                return this.fs.readFileSync(filePath + filename, "utf8");
            } else {
                console.log("File does not exist! Tried to read " + filePath + "/" + filename + "/");
            };
        };

        file.erase = function(filePath, filename) {
            if (file.exist(filePath, filename)) {
                filePath = this.createPath(filePath);
                return this.fs.unlink(filePath + filename);
            } else {
                console.log("File does not exist! Tried to erase " + filePath + "/" + filename + "/");
            };
        };

        file.rename = function(filePath, filename, newName) {
            if (file.exist(filePath, filename)) {
                filePath = this.createPath(filePath);
                return this.fs.rename(filePath + filename, filePath + newName);
            } else {
                console.log("File does not exist! Tried to rename " + filePath + "/" + filename + "/");
            };
        };
	

        file.createPath = function(relativePath) {
			oldVersion && (relativePath = "/" + relativePath);
			relativePath += (relativePath === "") ? "./" : "/";
            !(Utils.isNwjs() && Utils.isOptionValid("test")) && (relativePath = "www/" + relativePath);
            var path = window.location.pathname.replace(/(\/www|)\/[^\/]*$/, relativePath);
            if (path.match(/^\/([A-Z]\:)/)) {
                path = path.slice(1);
            };
            path = decodeURIComponent(path);
            return path;
        };

        window.file = file;
    }
    setup();	
})();
