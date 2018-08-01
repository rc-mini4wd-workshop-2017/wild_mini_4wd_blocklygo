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


Blockly.Blocks['webapi_forward'] = {
  /**
   * Block for webapi forward statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "forward %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["SLOW SPEED", "slow"],
              ["NORMAL SPEED", "normal"],
              ["HIGH SPEED", "high"],
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/forward/normal",
      "helpUrl": null
    });
  }
};

Blockly.Blocks['webapi_back'] = {
  /**
   * Block for webapi back statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "back %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["SLOW SPEED", "slow"],
              ["NORMAL SPEED", "normal"],
              ["HIGH SPEED", "high"],
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/back/normal",
      "helpUrl": null
    });
  }
};

Blockly.Blocks['webapi_drive'] = {
  /**
   * Block for webapi drive statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "drive %1 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["SLOW SPEED", "slow"],
              ["NORMAL SPEED", "normal"],
              ["HIGH SPEED", "high"],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "option",
          "options": [
              ["2sec stop", "2sec"],
              ["near stop", "UNTIL_NEAR"],
              ["bumper stop","UNTIL_BUMPER"],
          ]
        },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/back/drive/0",
      "helpUrl": null
    });
  }
};


Blockly.Blocks['webapi_stop'] = {
  /**
   * Block for webapi turnright statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "stop",
      "args0": null,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/stop",
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
   * Block for webapi turnleft statement.
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

Blockly.Blocks['webapi_turnfront'] = {
  /**
   * Block for webapi turnfront statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "turn front",
      "args0": null,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/turnfront",
      "helpUrl": null
    });
  }
};

Blockly.Blocks['webapi_servo'] = {
  /**
   * Block for webapi servo statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "servo %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["0", "0"],
              ["15", "15"],
              ["30", "30"],
              ["45", "45"],
              ["60", "60"],
              ["75", "75"],
              ["90", "90"],
              ["105", "105"],
              ["120", "120"],
              ["135", "135"],
              ["150", "150"],
              ["165", "165"],
              ["180", "180"],
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/servo",
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

