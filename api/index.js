const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const { chargue } = require('./src/init/preChargueFile.js')// ELIMinar antes de deployar

// Syncing all the models at once.nxnbxzbnbzbznxbnzb
conn.sync({ force: true }).then(async () => {
  await chargue()
  server.listen(process.env.PORT || 3001, () => {
    console.log(`%s listening at ${process.env.PORT}`) // eslint-disable-line no-console
  })
})
