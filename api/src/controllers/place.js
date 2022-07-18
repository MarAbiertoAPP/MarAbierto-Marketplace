const { s, findName } = require("../dao/place.js");
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * route createPlace
 */
exports.createPlace = async (req, res) => {
  const { name, located } = req.body;
  let response = await createPlace(name, located);
  return response
    ? res.status(200).send(response)
    : res.status(400).send({ msg: "impossible to add place" });
};
/**
 * route get Place
 */
exports.getPlace = async (req, res) => {
  let { name } = req.query;
  let find = await findName(name);
  return find
    ? res.status(200).send(find)
    : res.status(404).send({ msg: "Not found" });
};
