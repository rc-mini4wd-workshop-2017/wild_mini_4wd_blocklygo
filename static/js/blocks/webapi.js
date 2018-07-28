
Blockly.Blocks['webapi_echo'] = {
  /**
   * Block for webapi echo statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "echo %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/echo",
      "helpUrl": null
    });
  }
};

Blockly.Blocks['webapi_info'] = {
  /**
   * Block for webapi info statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "info",
      "args0": null,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/info",
      "helpUrl": null
    });
  }
};

Blockly.Blocks['webapi_ledon'] = {
  /**
   * Block for webapi ledon statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "ledon",
      "args0": null,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/ledon",
      "helpUrl": null
    });
  }
};

Blockly.Blocks['webapi_ledoff'] = {
  /**
   * Block for webapi ledoff statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "ledoff",
      "args0": null,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/ledoff",
      "helpUrl": null
    });
  }
};


Blockly.Blocks['webapi_straight'] = {
  /**
   * Block for webapi straight statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "straight %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["1sec", "1sec"],
              ["2sec", "2sec"],
              ["3sec", "3sec"],
              ["5sec", "5sec"],
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/straight/0",
      "helpUrl": null
    });
  }
};

Blockly.Blocks['webapi_turnright'] = {
  /**
   * Block for webapi turnright statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "turn right",
      "args0": null,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/turnright",
      "helpUrl": null
    });
  }
};

Blockly.Blocks['webapi_turnleft'] = {
  /**
   * Block for webapi turnright statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "turn left",
      "args0": null,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/turnleft",
      "helpUrl": null
    });
  }
};


// if serial id change dynamic, rewrite this function
function dynamicSerialId() {
    return [["0","0"]]
}

Blockly.Blocks['webapi_write_serial'] = {
  /**
   * Block for webapi serial write statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "serial %1 write %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "id",
          "options": dynamicSerialId()
        },
        {
          "type": "input_value",
          "name": "msg"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/device/serials/0/write",
      "helpUrl": null
    });
  }
};

Blockly.Blocks['webapi_read_serial'] = {
  /**
   * Block for webapi serial read statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "serial %1 read %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "id",
          "options": dynamicSerialId()
        },
        {
          "type": "field_variable",
          "name": "var"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/device/serials/0/read",
      "helpUrl": null
    });
  }
};

// if rebooter id change dynamic, rewrite this function
function dynamicRebooterId() {
    return [["0","0"]]
}

Blockly.Blocks['webapi_rebooter'] = {
  /**
   * Block for webapi rebooter statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "rebooter %1 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "id",
          "options": dynamicRebooterId()
        },
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["power on", "poweron"],
              ["power off", "poweroff"],
              ["reset", "reset"],
              ["reboot", "reboot"],
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/device/rebooters/0",
      "helpUrl": null
    });
  }
};

// if switcher id change dynamic, rewrite this function
function dynamicSwitcherId() {
    return [["0","0"]]
}

Blockly.Blocks['webapi_switcher'] = {
  /**
   * Block for webapi switcher write statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "switcher %1 write %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "id",
          "options": dynamicSwitcherId()
        },
        {
          "type": "input_value",
          "name": "msg"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/device/switchers/0",
      "helpUrl": null
    });
  }
};
