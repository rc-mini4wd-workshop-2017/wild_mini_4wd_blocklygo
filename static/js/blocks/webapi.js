Blockly.Blocks['webapi_info'] = {
  /**
   * Block for webapi info statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_WEBAPI_INFO_MESSAGE}",
      "args0": null,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/info",
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
      "message0": "%{BKY_WEBAPI_FORWARD_MESSAGE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "option",
          "options": [
              ["2", "2"],
              ["3", "3"],
              ["4", "4"],
              ["5", "5"],
              ["6", "6"],
              ["7", "7"],
              ["8", "8"],
              ["9", "9"],
              ["10", "10"],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["%{BKY_WEBAPI_FORWARD_SLOW}", "slow"],
              ["%{BKY_WEBAPI_FORWARD_NORMAL}", "normal"],
              ["%{BKY_WEBAPI_FORWARD_HIGH}", "high"],
          ]
        },
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
      "message0": "%{BKY_WEBAPI_BACK_MESSAGE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "option",
          "options": [
              ["2", "2"],
              ["3", "3"],
              ["4", "4"],
              ["5", "5"],
              ["6", "6"],
              ["7", "7"],
              ["8", "8"],
              ["9", "9"],
              ["10", "10"],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["%{BKY_WEBAPI_BACK_SLOW}", "slow"],
              ["%{BKY_WEBAPI_BACK_NORMAL}", "normal"],
              ["%{BKY_WEBAPI_BACK_HIGH}", "high"],
          ]
        },
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
      "message0": "%{BKY_WEBAPI_DRIVE_MESSAGE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "distance",
          "options": [
              ["5", "5"],
              ["10", "10"],
              ["20", "20"],
              ["30", "30"],
              ["40", "40"],
              ["50", "50"],
              ["60", "60"],
              ["70", "70"],
              ["80", "80"],
              ["90", "90"],
              ["100", "100"],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["%{BKY_WEBAPI_DRIVE_SLOW}", "slow"],
              ["%{BKY_WEBAPI_DRIVE_NORMAL}", "normal"],
              ["%{BKY_WEBAPI_DRIVE_HIGH}", "high"],
          ]
        }
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
      "message0": "%{BKY_WEBAPI_TURN_RIGHT_MESSAGE}",
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
      "message0": "%{BKY_WEBAPI_TURN_LEFT_MESSAGE}",
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
      "message0": "%{BKY_WEBAPI_TURN_FRONT_MESSAGE}",
      "args0": null,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/turnfront",
      "helpUrl": null
    });
  }
};

Blockly.Blocks['webapi_irgun'] = {
  /**
   * Block for webapi irgun statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_WEBAPI_IRGUN_MESSAGE}",
      "args0": null,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/irgun",
      "helpUrl": null
    });
  }
};

Blockly.Blocks['webapi_distance'] = {
  /**
   * Block for webapi distance statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_WEBAPI_DISTANCE_MESSAGE}",
      "args0": null,
      "colour": 230,
      "tooltip": "Execute Web API v1/distance",
      "helpUrl": null,
      "output": null
    });
  }
};
