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
  weightedAverage: Types.Double,
  period: Number
});

ChartData.statics.drop = function() {
  return this.remove({}).exec();
};

ChartData.statics.massImport = function(name, data, period) {
  const converted = data.map(data => Object.assign(
    {},
    data,
    {
      date: data.date * 1000,
      name,
      period
    }
  ));
  this.create(converted);
};

ChartData.statics.findByNameAndPeriod = function(name, period) {
  return this.find({
    name,
    period
  }).sort({
    date: 1
  });
};

module.exports = mongoose.model('ChartData', ChartData);