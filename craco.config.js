const path = require('path');

module.exports = {
    webpack: {
        aliases: {
            "@components": path.resolve(__dirname, "src/components"),
            "@views": path.resolve(__dirname, "src/views"),
            "@store": path.resolve(__dirname, "store"),
            "@namespaces": path.resolve(__dirname, "react-app-env.d"),
        }
    }
}