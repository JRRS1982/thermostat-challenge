$(document).ready(function(){
  var thermostat = new Thermostat();
  update();

  $('#up').click(function () {
    thermostat.up();
    update();
  });

  $('#down').click(function () {
    thermostat.down();
    update();
  });

  $('#psm_toggle').click(function () {
    thermostat.psmSwitch();
    update();
  });

  $('#reset').click(function () {
    thermostat.reset();
    update();
  });

  function update() {
    $('#psm_status').text('Power Saving is ' + thermostat.psm)
    $('#usage').text(thermostat.usage());
    $('#temperature').text(thermostat.temperature);
    if (thermostat.usage() === 'low-usage') {
      $('#usage').css('color', 'green')
    } else if (thermostat.usage() === 'medium-usage') {
      $('#usage').css('color', 'black')
    } else {
      $('#usage').css('color', 'red')
    }
  }
});
