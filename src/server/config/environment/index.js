process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');

const config = {};

config.PORT = process.env.PORT || 8888;

config.isProd = process.env.NODE_ENV === 'production';
config.isDev = process.env.NODE_ENV === 'development';
config.secret = process.env.SECRET || 'super duper secret for unnamed';
config.ROOT_PATH = path.join(__dirname, '..', '..', '..', '..');
config.FILES_PATH = path.join(config.ROOT_PATH, 'files');
config.PUBLIC_PATH = path.join(config.ROOT_PATH, 'public');
config.CLIENT_PATH = path.join(config.ROOT_PATH, 'src', 'client');
config.APP_PATH = path.join(config.CLIENT_PATH, 'index.js');
config.MODULES_PATH = path.join(config.ROOT_PATH, 'node_modules');
config.ASSETS_PATH = path.join(config.CLIENT_PATH, 'assets');
config.TEMPLATE_PATH = path.join(config.CLIENT_PATH, 'template');
config.MAIN_TEMPLATE = path.join(config.TEMPLATE_PATH, 'production.pug');

config.db = {
  database: process.env.NAME_DB || 'unnamed',
  host: 'localhost',
  user: process.env.USER_DB || 'root',
  password: process.env.PASS_DB || 'root'
};

if (config.isDev) {
  config.MAIN_TEMPLATE = path.join(config.TEMPLATE_PATH, 'development.pug');
}

module.exports = config;