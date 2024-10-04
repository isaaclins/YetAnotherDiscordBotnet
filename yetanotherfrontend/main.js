const path = require("path");
const { app, BrowserWindow } = require("electron");
require("electron-reload")(path.join(__dirname, "app"), {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      javascript: true, // Ensure JavaScript is enabled
    },
    autoHideMenuBar: true,
  });

  win.loadURL("http://localhost:3000"); // Assuming Next.js runs on port 3000
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
