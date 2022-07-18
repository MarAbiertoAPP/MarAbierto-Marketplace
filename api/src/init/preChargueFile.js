const { createPlace, findNameOrCreate, findName } = require('../dao/place.js')

const axios = require('axios')
// https://www.datos.gov.co/resource/xdk5-pm3f.json
// https://apis.datos.gob.ar/georef/api/provincias
// https://apis.datos.gob.ar/georef/api/municipios?provincia=14&campos=nombre&max=428

/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */

/**
 * this method reads apis and preloads the information is
 * temporary while the database is just filled and the "force" becomes false.
 * DELETE ENTIRE INIT FOLDER BEFORE DEPLOYING
 */

const chargue = async () => {
  try {
    // Crear lugares
    const col = await createPlace('colombia', null)
    const arg = await createPlace('argentina', null)
    let chargeCOL = await axios.get('https://www.datos.gov.co/resource/xdk5-pm3f.json') // deparamentos y ciudades
    chargeCOL = chargeCOL.data
    for (let i = 0; i < chargeCOL.length; i++) {
      await findNameOrCreate(chargeCOL[i].departamento, col.dataValues.id) // departamentos
    }
    for (let i = 0; i < chargeCOL.length; i++) {
      const e = await findName(chargeCOL[i].departamento)
      await findNameOrCreate(chargeCOL[i].municipio, e.dataValues.id) // ciudad
    }
    let chargeArg = await axios.get('https://apis.datos.gob.ar/georef/api/provincias') // provicias
    chargeArg = chargeArg.data.provincias
    let chargeArgM = ''
    let ele = '' // municipios
    for (let i = 0; i < chargeArg.length; i++) {
      ele = await findNameOrCreate(chargeArg[i].nombre, arg.dataValues.id) // crea provicia
      chargeArgM = await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${chargeArg[i].id}&campos=nombre&max=428`) // crea ciudades de provicias
      chargeArgM = chargeArgM.data.municipios
      for (let j = 0; j < chargeArgM.length; j++) {
        await findNameOrCreate(chargeArgM[j].nombre, ele[0].dataValues.id)
      }
    }
    console.log('sucessfully')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  chargue
}
