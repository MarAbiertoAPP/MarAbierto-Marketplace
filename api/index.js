const server = require('./src/app.js')
const { conn } = require('./src/db.js')
// const { chargue } = require('./src/init/preChargueFile.js')// ELIMinar antes de deployar

// Syncing all the models at once.nxnbxzbnbzbznxbnzbksjksj
conn.sync({ force: false }).then(async () => {
  // await chargue()
  server.listen(process.env.PORT, () => {
    console.log(`%s listening at ${process.env.PORT}`) // eslint-disable-line no-console
  })
})
