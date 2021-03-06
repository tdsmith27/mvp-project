const mongoose = require("mongoose");
const util = require("util");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USR}:${process.env.DB_PASS}@${process.env.DB_STRING}?retryWrites=true`,
  () => console.log("database connection established")
);

const seasonalSchema = mongoose.Schema({
  state: "string",
  season: "string",
  veggies: ["string"]
});

const Seasonal = mongoose.model("Seasonal", seasonalSchema);

const save = (doc, cb) => {
  let seasonal = new Seasonal(doc);

  seasonal
    .save()
    .then(data => cb(null, data))
    .catch(err => cb(err));
};

const find = (state, season, cb) => {
  const query = Seasonal.find({ state: state, season: season });

  query
    .exec()
    .then(response => cb(null, response))
    .catch(err => cb(err));
};

module.exports.findP = util.promisify(find);
module.exports.saveP = util.promisify(save);
module.exports.save = save;
module.exports.find = find;
