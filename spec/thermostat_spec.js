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
    it("Has a default psm which is on/true", function() {
      expect(thermostat.psm).toBe(true)
    });
  });

  describe(".up", function() {
    it ("raises the temperature by 1 degree", function() {
      thermostat.up();
      expect(thermostat.temperature).toBe(21)
    });
    it("does not raise temp above 25 when psm is on", function () {
      expect(thermostat.psm).toBe(true);
      for (var i = 0; i < 5; i++)
        thermostat.up();
      expect(thermostat.temperature).toBe(25);
      expect(thermostat.up()).toBe("Maximum temperature reached");
      expect(thermostat.temperature).toBe(25);
    });
    it("does not raise temp above 32 when psm is off", function () {
      thermostat.psmSwitch();
      expect(thermostat.psm).toBe(false);
      for (var i = 0; i < 12; i++)
        thermostat.up();
      expect(thermostat.temperature).toBe(32);
      expect(thermostat.up()).toBe("Maximum temperature reached");
      expect(thermostat.temperature).toBe(32);
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

  describe(".psmSwitch", function() {
    it("changes the state of the psm", function() {
      thermostat.psmSwitch();
      expect(thermostat.psm).toBe(false);
    });
  });

  describe(".reset", function() {
    it("resets the temperature to 20", function() {
      thermostat.up();
    expect(thermostat.temperature).toBe(21)
      thermostat.reset();
    expect(thermostat.temperature).toBe(20)
    });
  });
});
