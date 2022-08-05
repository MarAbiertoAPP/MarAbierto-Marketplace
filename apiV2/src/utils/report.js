const { report } = require('../db.js')

const createReport = async (target, type, description, id) => {
  try {
    return await report.create({ target, type, description, id })
  } catch (error) {
    console.log(error)
    throw error.message
  }
}

module.exports = {
  createReport
}
