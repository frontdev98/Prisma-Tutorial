const { createLogger, transports, format } = require('winston');

module.exports = createLogger({
    defaultMeta: {'service': 'extended-jwt'},
    format: format.json(),
    transports: [
        new transports.Console({
            format: format.simple()
        })
    ]
});