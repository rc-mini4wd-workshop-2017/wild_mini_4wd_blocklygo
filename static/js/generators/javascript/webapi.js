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

Blockly.JavaScript['webapi_forward'] = function(block) {
  // Print statement.
  var command = block.getFieldValue('command');
  var option = block.getFieldValue('option');
  var args = '\'' + command + '\',\'' + option + '\'';
  return 'webapiForward(' + args + ');\n';
};

function initInterpreterWebapiForward(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiForward');
  var wrapper = interpreter.createAsyncFunction(
    function(command, option, callback) {
      var url = webapiPrefix + '/forward/' + command + '/' + option;
      window.alert("forward< url: " + url);
      window.alert("forward< speed: " + command);
      window.alert("forward< option: " + option);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: command, option,
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
  var command = block.getFieldValue('command');
  var option = block.getFieldValue('option');
  var args = '\'' + command + '\',\'' + option + '\'';
  return 'webapiBack(' + args + ');\n';
};

function initInterpreterWebapiBack(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiBack');
  var wrapper = interpreter.createAsyncFunction(
    function(command, option, callback) {
      var url = webapiPrefix + '/back/' + command + '/' + option;
      window.alert("back< url: " + url);
      window.alert("back< option: " + option);
      window.alert("back< speed: " + command);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: command, option,
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
  var distance = block.getFieldValue('distance');
  var args = '\'' + command + '\',\'' + distance + '\'';
  return 'webapiDrive(' + args + ');\n';
};

function initInterpreterWebapiDrive(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiDrive');
  var wrapper = interpreter.createAsyncFunction(
    function(command, distance, callback) {
      var url = webapiPrefix + '/drive/' + command + '/' + distance;
      window.alert("drive< url: " + url);
      window.alert("drive< speed: " + command);
      window.alert("drive< distance: " + distance);
      
      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: command,
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

Blockly.JavaScript['webapi_irgun'] = function(block) {
  // Print statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';

  return 'webapiIrGun();\n';
};

function initInterpreterWebapiIrGun(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiIrGun');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      var url = webapiPrefix + '/irgun';
      window.alert("irgun< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: '',
        success: function(text, status, xhr){
          window.alert("irgun> " + text);
          callback();
        },
        error: function(xhr){
          window.alert("irgun> error: " + xhr.status);
          window.alert("irgun> " + xhr.responseText);
        }
      });
    });
  interpreter.setProperty(scope, 'webapiIrGun', wrapper);
}

Blockly.JavaScript['webapi_distance'] = function(block) {
  // Print statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';

  return 'webapiDistance();\n';
};

function initInterpreterWebapiDistance(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('webapiDistance');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      var url = webapiPrefix + '/distance';
      window.alert("distance< url: " + url);

      // Delay the call to the callback.
      $.ajax({
        type: 'PUT',
        url: url,
        dataType: 'text',
        data: '',
        success: function(text, status, xhr){
          window.alert("distance> " + text);
          callback(parseInt(text,10));
        },
        error: function(xhr){
          window.alert("distance> error: " + xhr.status);
          window.alert("distance> " + xhr.responseText);
          callback(xtr.responseText);
        }
      });
    });
  interpreter.setProperty(scope, 'webapiDistance', wrapper);
}

/**
 * Register the interpreter asynchronous webapi functions
 */
function initInterpreterWebapi(interpreter, scope) {
  initInterpreterWebapiInfo(interpreter, scope);
  initInterpreterWebapiForward(interpreter, scope);
  initInterpreterWebapiBack(interpreter, scope);
  initInterpreterWebapiStop(interpreter, scope);
  initInterpreterWebapiDrive(interpreter, scope);
  initInterpreterWebapiTurnRight(interpreter, scope);
  initInterpreterWebapiTurnLeft(interpreter, scope);
  initInterpreterWebapiTurnFront(interpreter, scope);
  initInterpreterWebapiIrGun(interpreter, scope);
  initInterpreterWebapiDistance(interpreter, scope);
}
