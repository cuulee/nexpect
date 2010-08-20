var sys = require('sys'),
    events = require('events'),
    assert = require('assert'),
    eyes = require('eyes'),
    vows = require('vows'),
    exec = require('child_process').exec,
    spawn = require('child_process').spawn;


var nexpect = {
  spawn:function(){
    return 'exec-test.js';
  }
};

vows.describe('noc/terminal-exec').addBatch({
  "When executing commands on the terminal": {
    "and you run ls with DIRNAME": {
      topic: nexpect.spawn('ls -a'),
      "you should see the current path": function(result){
        eyes.inspect(result);
        assert.equal( result, 'exec-test.js');
      }
    }
  }
}).export(module);
