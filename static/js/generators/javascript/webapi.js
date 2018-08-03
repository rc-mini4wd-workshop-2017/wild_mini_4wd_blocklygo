var webapiPrefix = "v1";

Blockly.JavaScript['webapi_info'] = function(block) {
  // Print statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';

  return 'webapiInfo();\n';
};

function initInterpreterWebapiInfo(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiInfo');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      var url = webapiPrefix + '/info';
      window.alert("info< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: '',
        success: function(text, status, xhr){
          window.alert("info> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("info> error: " + xhr.status);
          window.alert("info> " + xhr.responseText);
        }
      });
    });
  interpreter.setProperty(scope, 'webapiInfo', wrapper);
}

Blockly.JavaScript['webapi_ledon'] = function(block) {
  // Print statement.
//  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
//      Blockly.JavaScript.ORDER_NONE) || '\'\'';

  return 'webapiLedon();\n';
};

function initInterpreterWebapiLedon(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiInfo');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      var url = webapiPrefix + '/ledon';
      window.alert("ledon< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: '',
        success: function(text, status, xhr){
          window.alert("ledon> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("ledon> error: " + xhr.status);
          window.alert("ledon> " + xhr.responseText);
        }
      });
    });
  interpreter.setProperty(scope, 'webapiLedon', wrapper);
}

Blockly.JavaScript['webapi_ledoff'] = function(block) {
  // Print statement.
//  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
//      Blockly.JavaScript.ORDER_NONE) || '\'\'';

  return 'webapiLedoff();\n';
};

function initInterpreterWebapiLedoff(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiInfo');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      var url = webapiPrefix + '/ledoff';
      window.alert("ledoff< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: '',
        success: function(text, status, xhr){
          window.alert("ledoff> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("ledoff> error: " + xhr.status);
          window.alert("ledoff> " + xhr.responseText);
        }
      });
    });
  interpreter.setProperty(scope, 'webapiLedoff', wrapper);
}

Blockly.JavaScript['webapi_forward'] = function(block) {
  // Print statement.
  var args = '\'' + block.getFieldValue('command') + '\'';
  return 'webapiForward(' + args + ');\n';
};

function initInterpreterWebapiForward(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiForward');
  var wrapper = interpreter.createAsyncFunction(
    function(command, callback) {
      var url = webapiPrefix + '/forward/' + command;
      window.alert("forward< url: " + url);
      window.alert("forward< speed: " + command);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: command,
        success: function(text, status, xhr){
          window.alert("forward> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("forward> error: " + xhr.status);
          window.alert("forward> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiForward', wrapper);
}

Blockly.JavaScript['webapi_back'] = function(block) {
  // Print statement.
  var args = '\'' + block.getFieldValue('command') + '\'';
  return 'webapiBack(' + args + ');\n';
};

function initInterpreterWebapiBack(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiBack');
  var wrapper = interpreter.createAsyncFunction(
    function(command, callback) {
      var url = webapiPrefix + '/back/' + command;
      window.alert("back< url: " + url);
      window.alert("back< speed: " + command);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: command,
        success: function(text, status, xhr){
          window.alert("back> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("back> error: " + xhr.status);
          window.alert("back> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiBack', wrapper);
}

Blockly.JavaScript['webapi_stop'] = function(block) {
  // Print statement.
  return 'webapiStop();\n';
};

function initInterpreterWebapiStop(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiStop');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      var url = webapiPrefix + '/stop/';
      window.alert("stop< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: '',
        success: function(text, status, xhr){
          window.alert("stop> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("stop> error: " + xhr.status);
          window.alert("stop> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiStop', wrapper);
}

Blockly.JavaScript['webapi_drive'] = function(block) {
  // Print statement.
  var command = block.getFieldValue('command');
  var option = block.getFieldValue('option');
  var args = '\'' + command + '\',\'' + option + '\'';
  return 'webapiDrive(' + args + ');\n';
};

function initInterpreterWebapiDrive(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiDrive');
  var wrapper = interpreter.createAsyncFunction(
    function(command, option, callback) {
      var url = webapiPrefix + '/drive/' + command + '/' + option;
      window.alert("drive< url: " + url);
      window.alert("drive< speed: " + command);
      window.alert("drive< option: " + option);
      
      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: command, option,
        success: function(text, status, xhr){
          window.alert("drive> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("drive> error: " + xhr.status);
          window.alert("drive> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiDrive', wrapper);
}

Blockly.JavaScript['webapi_turnright'] = function(block) {
  // Print statement.
  return 'webapiTurnRight();\n';
};

function initInterpreterWebapiTurnRight(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiTurnRight');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      var url = webapiPrefix + '/turnright';
      window.alert("turnright< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: '',
        success: function(text, status, xhr){
          window.alert("turnright> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("turnright> error: " + xhr.status);
          window.alert("turnright> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiTurnRight', wrapper);
}

Blockly.JavaScript['webapi_turnleft'] = function(block) {
  // Print statement.
  return 'webapiTurnLeft();\n';
};

function initInterpreterWebapiTurnLeft(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiTurnLeft');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      var url = webapiPrefix + '/turnleft';
      window.alert("turnleft< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: '',
        success: function(text, status, xhr){
          window.alert("turnleft> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("turnleft> error: " + xhr.status);
          window.alert("turnleft> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiTurnLeft', wrapper);
}

Blockly.JavaScript['webapi_turnfront'] = function(block) {
  // Print statement.
  return 'webapiTurnFront();\n';
};

function initInterpreterWebapiTurnFront(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiTurnFront');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      var url = webapiPrefix + '/turnfront';
      window.alert("turnfront< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: '',
        success: function(text, status, xhr){
          window.alert("turnfront> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("turnfront> error: " + xhr.status);
          window.alert("turnfront> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiTurnFront', wrapper);
}

Blockly.JavaScript['webapi_servo'] = function(block) {
  // Print statement.
  var args = '\'' + block.getFieldValue('command') + '\'';
  return 'webapiServo(' + args + ');\n';
};

function initInterpreterWebapiServo(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiServo');
  var wrapper = interpreter.createAsyncFunction(
    function(command, callback) {
      var url = webapiPrefix + '/servo/' + command;
      window.alert("servo< url: " + url);
      window.alert("servo< angle:" + command);
      
      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: command,
        success: function(text, status, xhr){
          window.alert("servo> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("servo> error: " + xhr.status);
          window.alert("servo> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiServo', wrapper);
}

Blockly.JavaScript['webapi_write_serial'] = function(block) {
  // Print statement.
  var id = block.getFieldValue('id');
  var msg = Blockly.JavaScript.valueToCode(block, 'msg',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
  var array = '\'' + id + '\',' + msg;
  return 'webapiWriteSerial(' + array + ');\n';
};

function initInterpreterWebapiWriteSerial(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiWriteSerial');
  var wrapper = interpreter.createAsyncFunction(
    function(id, msg, callback) {
      var url = webapiPrefix + '/device/serials/' + id + '/write';
      window.alert("serial< url: " + url);
      window.alert("serial< " + msg);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: msg,
        success: function(text, status, xhr){
          callback();
        },
        error: function(xhr){
          window.alert("serial> error: " + xhr.status);
          window.alert("serial> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiWriteSerial', wrapper);
}

Blockly.JavaScript['webapi_read_serial'] = function(block) {
  // Print statement.
  var id = block.getFieldValue('id');
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  return varName + ' = webapiReadSerial(\'' + id + '\');\n';
};

function initInterpreterWebapiReadSerial(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiReadSerial');
  var wrapper = interpreter.createAsyncFunction(
    function(id, callback) {
      var url = webapiPrefix + '/device/serials/' + id + '/read';
      window.alert("serial< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        success: function(text, status, xhr){
          window.alert("serial> " + text);
          callback(text);
        },
        error: function(xhr){
          window.alert("serial> error: " + xhr.status);
          window.alert("serial> " + xhr.responseText);
          callback(xhr.responseText);
        }
      });
    });
  interpreter.setProperty(scope, 'webapiReadSerial', wrapper);
}

Blockly.JavaScript['webapi_rebooter'] = function(block) {
  // Print statement.
  var id = block.getFieldValue('id');
  var command = block.getFieldValue('command');
  var args = '\'' + id + '\',\'' + command + '\'';
  return 'webapiRebooter(' + args + ');\n';
};

function initInterpreterWebapiRebooter(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiRebooter');
  var wrapper = interpreter.createAsyncFunction(
    function(id, command, callback) {
      var url = webapiPrefix + '/device/rebooters/' + id + '/' + command;
      window.alert("rebooter< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        success: function(text, status, xhr){
          window.alert("rebooter> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("rebooter> error: " + xhr.status);
          window.alert("rebooter> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiRebooter', wrapper);
}


/**
 * Register the interpreter asynchronous webapi functions
 */
function initInterpreterWebapi(interpreter, scope) {
  initInterpreterWebapiInfo(interpreter, scope);
  initInterpreterWebapiLedon(interpreter, scope);
  initInterpreterWebapiLedoff(interpreter, scope);
  initInterpreterWebapiForward(interpreter, scope);
  initInterpreterWebapiBack(interpreter, scope);
  initInterpreterWebapiStop(interpreter, scope);
  initInterpreterWebapiDrive(interpreter, scope);
  initInterpreterWebapiTurnRight(interpreter, scope);
  initInterpreterWebapiTurnLeft(interpreter, scope);
  initInterpreterWebapiTurnFront(interpreter, scope);
  initInterpreterWebapiServo(interpreter, scope);
  initInterpreterWebapiWriteSerial(interpreter, scope);
  initInterpreterWebapiReadSerial(interpreter, scope);
  initInterpreterWebapiRebooter(interpreter, scope);
}
