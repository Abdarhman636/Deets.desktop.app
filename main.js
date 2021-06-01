const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 500,
    minWidth: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: __dirname + "./assets/img/Assets 1.png",
  });

  win.loadFile("./public/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
