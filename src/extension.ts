'use strict'
import * as vscode from 'vscode'
import cmds from './commands'
import statusBar from './statusbar'

export function activate (ctx: vscode.ExtensionContext) {
  ctx.subscriptions.push(vscode.workspace.onDidSaveTextDocument(textDocument => cmds.compile(textDocument)))
  ctx.subscriptions.push(vscode.commands.registerCommand('FastSfdc.enterCredentials', cmds.credentials))
  ctx.subscriptions.push(vscode.commands.registerCommand('FastSfdc.createMeta', cmds.createMeta))
  ctx.subscriptions.push(vscode.commands.registerCommand('FastSfdc.createAuraDefinition', cmds.createAuraDefinition))
  statusBar.initStatusBar()
  console.log('Extension "fast-sfdc" is now active!')
}
