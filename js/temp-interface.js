exports.convertTemperature = function(temp) {
  var convertedTemp = [];
  var f = temp * (9/5) - 456.67;
  convertedTemp.push(Math.floor(f));

  var c = (f - 32) / 1.8;
  convertedTemp.push(Math.floor(c));

  return convertedTemp;
};
