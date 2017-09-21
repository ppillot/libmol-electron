'use strict'

import { app, BrowserWindow, Menu, dialog } from 'electron'
import fs from 'fs'

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}`
  : `file://${__dirname}/index.html`

const template = [
  {
    label: 'Fichier',
    submenu: [
      {label: 'Ouvrir',
        accelerator: 'CmdOrCtrl+O',
        click: (m, bw, ev) => {
          dialog.showOpenDialog(bw, {
            filters: [
              { name: 'Molecules', extensions: ['pdb', 'mol', 'sdf', 'mmtf'] }
            ],
            properties: ['openFile']
          }, (filePaths) => {
            if (filePaths[0]) {
              fs.readFile(filePaths[0], (err, data) => {
                if (err) throw err
                mainWindow.webContents.send('load', filePaths[0], data)
              })
            }
          })
        }
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {role: 'reload'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  } /* ,
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      }
    ]
  } */
]

if (process.platform === 'darwin') {
  template.unshift({
    label: 'Libmol',
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })

  // Window menu
  template[3].submenu = [
    {role: 'close'},
    {role: 'minimize'},
    {role: 'zoom'},
    {type: 'separator'},
    {role: 'front'}
  ]
}

function createMenu () {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 768,
    width: 1024,
    title: 'LibMol',
    titleBarStyle: 'default'
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // eslint-disable-next-line no-console
  console.log('mainWindow opened')
}

app.on('ready', () => {
  createMenu()
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('open-file', (ev, path) => {
  mainWindow.webContents.send('load', path)
})
