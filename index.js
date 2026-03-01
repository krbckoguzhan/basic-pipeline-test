const express = require('express');
const winston = require('winston');
const app = express();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple())
    })
  ],
});

app.get('/', (req, res) => {
  logger.info('Yeni bir istek geldi: /');
  res.send('Pipeline Demosu Calisiyor!');
});

if (require.main === module) {
  app.listen(3000, () => logger.info('Sunucu 3000 portunda ayakta. yeni image oluşturuldu22.'));
}

module.exports = app;