const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const { Schema } = mongoose;
const { Types } = Schema;

const ChartData = new Schema({
  name: String,
  date: Date,
  high: Types.Double,
  low: Types.Double,
  open: Types.Double,
  close: Types.Double,
  volume: Types.Double,
  quoteVolume: Types.Double,
  weightedAverage: Types.Double
});

ChartData.statics.massImport = function(name, data) {
  const converted = data.map(data => Object.assign(
    {},
    data,
    {
      date: data.date * 1000,
      name
    }
  ));
  this.create(converted);
};

ChartData.statics.drop = function() {
  return this.remove({}).exec();
};

module.exports = mongoose.model('ChartData', ChartData);