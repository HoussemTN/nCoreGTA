-- This resource is part of the default Cfx.re asset pack (cfx-server-data)
-- Altering or recreating for local use only is strongly discouraged.

author 'SuperCoolNinja'
fx_version 'cerulean'
game 'gta5'

dependency 'webpack'
dependency 'yarn'

webpack_config 'client.config.js'
webpack_config 'server.config.js'
client_script  'dist/cmain.js'
server_script  'dist/smain.js'
