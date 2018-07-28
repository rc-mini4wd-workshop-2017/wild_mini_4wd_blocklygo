Blockly.Blocks['mytext_isInclude'] = {
  /**
   * Block for webapi echo statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "is include text %1 in text %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FIND"
        },
        {
          "type": "field_variable",
          "name": "VAR"
        }
      ],
      "output": 'Boolean',
      "colour": "%{BKY_TEXTS_HUE}",
      "tooltip": "Return wherther include text or not",
      "helpUrl": null
    });
  }
};
