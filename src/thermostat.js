"use strict"

function Thermostat () {
  this.temperature = 20;
  this.MINTEMP = 10;
  this.psm = true;
};

Thermostat.prototype.up = function() {
  if (this.temperature === 25 && this.psm === true) {
    this.temperature = 25;
    return "Maximum temperature reached";
  } else if (this.temperature === 32 && this.psm === false) {
    this.temperature = 32;
    return "Maximum temperature reached";
  } else {
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function () {
  if (this.temperature === 10) {
    this.temperature = 10;
    return "Minimum temperature reached";
  } else {
    this.temperature -= 1;
  }
};

Thermostat.prototype.psmSwitch = function () {
  if (this.psm === true) {
    this.psm = false
  } else {
    this.psm = true 
  }
};

Thermostat.prototype.reset = function () {
  this.temperature = 20
}

Thermostat.prototype.usage = function () {
  if (this.temperature >= 18 && this.temperature < 25) {
    return 'medium-usage'
  } else if (this.temperature >= 25) {
    return 'high-usage'
  } else {
  return 'low-usage'
  }
}