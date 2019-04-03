"use strict"

function Thermostat () {
  this.temperature = 20;
  this.MINTEMP = 10;
};

Thermostat.prototype.up = function() {
  this.temperature +=1;
};

Thermostat.prototype.down = function () {
  if (this.temperature === 10) {
    this.temperature = 10
    return "Minimum temperature reached"
  } else {
    this.temperature -= 1;
  }
};