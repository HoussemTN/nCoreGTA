fx_version 'cerulean'
game 'gta5'

dependency 'webpack'
dependency 'yarn'

webpack_config 'client.config.js'
webpack_config 'server.config.js'

server_script "dist/smain.js"
client_script "src/cmain.js"

ui_page 'src/index.html'
files {
    'src/index.html',
    'dist/UIDentity.js',
    'src/style.css',
    'src/menu/*.html',
    'src/parents/*.jpg',
}