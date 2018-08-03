Blockly.Blocks['webapi_info'] = {
  /**
   * Block for webapi info statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "バージョン取得",
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
      "message0": "%1 秒 %2 前に進む",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "option",
          "options": [
              ["2秒", "2"],
              ["3秒", "3"],
              ["4秒", "4"],
              ["5秒", "5"],
              ["6秒", "6"],
              ["7秒", "7"],
              ["8秒", "8"],
              ["9秒", "9"],
              ["10秒", "10"],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["ゆっくり", "slow"],
              ["ふつう", "normal"],
              ["はやい", "high"],
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
      "message0": "%1 秒 %2 後ろに進む",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "option",
          "options": [
              ["2秒", "2"],
              ["3秒", "3"],
              ["4秒", "4"],
              ["5秒", "5"],
              ["6秒", "6"],
              ["7秒", "7"],
              ["8秒", "8"],
              ["9秒", "9"],
              ["10秒", "10"],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["ゆっくり", "slow"],
              ["ふつう", "normal"],
              ["はやい", "high"],
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
      "message0": "障害物の20cm前まで %1 進む",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "command",
          "options": [
              ["ゆっくり", "slow"],
              ["ふつう", "normal"],
              ["はやい", "high"],
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
      "message0": "右にハンドルをきる",
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
      "message0": "左にハンドルをきる",
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
      "message0": "ハンドルを戻す",
      "args0": null,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Execute Web API v1/turnfront",
      "helpUrl": null
    });
  }
};

