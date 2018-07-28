
//var webapiPrefix = "v1";
var webapiPrefix = "http://localhost:8080/v1";

Blockly.JavaScript['webapi_echo'] = function(block) {
  // Print statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';

  return 'webapiEcho(' + msg + ');\n';
};

function initInterpreterWebapiEcho(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiEcho');
  var wrapper = interpreter.createAsyncFunction(
    function(msg, callback) {
      var url = webapiPrefix + '/echo';
      window.alert("echo< url: " + url);
      window.alert("echo< " + msg);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: msg,
        success: function(text, status, xhr){
          window.alert("echo> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("echo> error: " + xhr.status);
          window.alert("echo> " + xhr.responseText);
        }
      });
    });
  interpreter.setProperty(scope, 'webapiEcho', wrapper);
}

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

Blockly.JavaScript['webapi_straight'] = function(block) {
  // Print statement.
  var id = block.getFieldValue('id');
  var command = block.getFieldValue('command');
  var args = '\'' + id + '\',\'' + command + '\'';
  return 'webapiStraight(' + args + ');\n';
};

function initInterpreterWebapiStraight(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiStraight');
  var wrapper = interpreter.createAsyncFunction(
    function(id, command, callback) {
      var url = webapiPrefix + '/device/straight/' + id + '/' + command;
      window.alert("straight< url: " + url);
      window.alert("straight< command: " + command);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: command,
        success: function(text, status, xhr){
          window.alert("straight> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("straight> error: " + xhr.status);
          window.alert("straight> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiStraight', wrapper);
}

Blockly.JavaScript['webapi_turnright'] = function(block) {
  // Print statement.
  var id = block.getFieldValue('id');

  return 'webapiTurnRight(\'' + id + '\');\n';
};

function initInterpreterWebapiTurnRight(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiTurnrigtt');
  var wrapper = interpreter.createAsyncFunction(
    function(id, command, callback) {
      var url = webapiPrefix + '/device/turnright/' + id;
      window.alert("turnright< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: command,
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
  var id = block.getFieldValue('id');

  return 'webapiTurnLeft(\'' + id + '\');\n';
};

function initInterpreterWebapiTurnLeft(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiTurnleft');
  var wrapper = interpreter.createAsyncFunction(
    function(id, command, callback) {
      var url = webapiPrefix + '/device/turnright/' + id;
      window.alert("turnleft< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: command,
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

Blockly.JavaScript['webapi_switcher'] = function(block) {
  // Print statement.
  var id = block.getFieldValue('id');
  var msg = Blockly.JavaScript.valueToCode(block, 'msg',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
  var args = '\'' + id + '\',' + msg;
  return 'webapiExecuteSwitcher(' + args + ');\n';
};

function initInterpreterWebapiSwitcher(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiExecuteSwitcher');
  var wrapper = interpreter.createAsyncFunction(
    function(id, msg, callback) {
      var url = webapiPrefix + '/device/switchers/' + id + '/' + msg;
      window.alert("switcher> url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: msg,
        success: function(text, status, xhr){
          window.alert("switcher> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("switcher> error: " + xhr.status);
          window.alert("switcher> " + xhr.responseText);
          callback();
        }
      });
    });
  interpreter.setProperty(scope, 'webapiExecuteSwitcher', wrapper);
}

/**
 * Register the interpreter asynchronous webapi functions
 */
function initInterpreterWebapi(interpreter, scope) {
  initInterpreterWebapiEcho(interpreter, scope);
  initInterpreterWebapiInfo(interpreter, scope);
  initInterpreterWebapiLedon(interpreter, scope);
  initInterpreterWebapiLedoff(interpreter, scope);
  initInterpreterWebapiStraight(interpreter, scope);
  initInterpreterWebapiTurnRight(interpreter, scope);
  initInterpreterWebapiTurnLeft(interpreter, scope);
  initInterpreterWebapiWriteSerial(interpreter, scope);
  initInterpreterWebapiReadSerial(interpreter, scope);
  initInterpreterWebapiRebooter(interpreter, scope);
  initInterpreterWebapiSwitcher(interpreter, scope);
}
