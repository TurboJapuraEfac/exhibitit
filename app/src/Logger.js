"use strict";

module.exports = class Logger {
  constructor(appName, debugOn = true) {
    if (appName) this.appName = appName;
    else this.appName = "exhibitit";
    this.debugOn = debugOn;
  }

  debug(msg, op = "") {
    if (this.debugOn === false) return;
    console.debug(
      "[" + this.getDataTime() + "] [" + this.appName + "] " + msg,
      op
    );
  }

  log(msg, op = "") {
    console.log(
      "[" + this.getDataTime() + "] [" + this.appName + "] " + msg,
      op
    );
  }

  info(msg, op = "") {
    console.info(
      "[" + this.getDataTime() + "] [" + this.appName + "] " + msg,
      op
    );
  }

  warn(msg, op = "") {
    console.warn(
      "[" + this.getDataTime() + "] [" + this.appName + "] " + msg,
      op
    );
  }

  error(msg, op = "") {
    console.error(
      "[" + this.getDataTime() + "] [" + this.appName + "] " + msg,
      op
    );
  }

  getDataTime() {
    return new Date().toISOString().replace(/T/, " ").replace(/Z/, "");
  }
};
