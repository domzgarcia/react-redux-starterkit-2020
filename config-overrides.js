module.exports = function override(config, env) {
    const path = require('path');
    config.resolve.alias['Common'] = path.join(__dirname, 'src', 'common');
    config.resolve.alias['Layouts'] = path.join(__dirname, 'src', 'layouts');
    config.resolve.alias['Pages'] = path.join(__dirname, 'src', 'pages');
    config.resolve.alias['Reducers'] = path.join(__dirname, 'src', 'reducers');
    config.resolve.alias['Utilities'] = path.join(__dirname, 'src', 'utilities');
    config.resolve.alias['Vendors'] = path.join(__dirname, 'src', 'vendors');
    config.resolve.alias['Images'] = path.join(__dirname, 'public', 'images');
    return config;
}