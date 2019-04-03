// basically used to ensure formatting is strict... use this. 
"use strict";

describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
  //create a new object
    thermostat = new Thermostat
  });
  
  describe("New Thermostat", function() {
    it ("Has a default temperature of 20", function() {
      expect(thermostat.temperature).toBe(20)
    });
    it("Has a minimum temperature of 10", function () {
      expect(thermostat.MINTEMP).toBe(10)
    });
  });

  describe(".up", function() {
    it ("raises the temperature by 1 degree", function() {
      thermostat.up();
      expect(thermostat.temperature).toBe(21)
    });
  });

  describe(".down", function() {
    it("lowers the temperature by 1 degree", function() {
      thermostat.down();
      expect(thermostat.temperature).toBe(19)
    });
    it("does not lower temp below 10", function () {
      for (var i = 0; i < 10; i++)
        thermostat.down();
      expect(thermostat.temperature).toBe(10);
      expect(thermostat.down()).toBe("Minimum temperature reached");
      expect(thermostat.temperature).toBe(10);
    });
  });

});

