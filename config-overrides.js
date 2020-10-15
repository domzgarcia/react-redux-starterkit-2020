module.exports = function override(config, env) {
    const path = require('path');
    config.resolve.alias['Layouts'] = path.join(__dirname, 'src', 'layouts');
    config.resolve.alias['Pages'] = path.join(__dirname, 'src', 'pages');
    
    // config.resolve.alias['pages'] = path.join(__dirname, 'pages');
    // config.resolve.alias['services'] = path.join(__dirname, 'services');
    // config.resolve.alias['utils'] = path.join(__dirname, 'utils');
    // config.resolve.alias['config'] = path.join(__dirname, 'config');
    // config.resolve.alias['images'] = path.join(__dirname, 'public', 'images');    
    return config;
}